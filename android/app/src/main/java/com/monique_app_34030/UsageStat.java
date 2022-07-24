package com.monique_app_34030;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.HashMap;
import android.util.Log;
import android.app.AppOpsManager;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.graphics.drawable.Drawable;
import android.net.IpSecManager;
import android.os.Bundle;
import android.provider.Settings;
import com.facebook.react.bridge.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static android.app.AppOpsManager.MODE_ALLOWED;
import static android.app.AppOpsManager.OPSTR_GET_USAGE_STATS;

public class UsageStat extends ReactContextBaseJavaModule {
    UsageStat(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "UsageStat";
    }

    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    private boolean init() {
        Context context = getReactApplicationContext();
        if (getGrantStatus()) {
            return true;
        } else {
            context.startActivity(new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS));
            return false;
        }
    }

    private boolean getGrantStatus() {
        Context context = getReactApplicationContext();
        AppOpsManager appOps = (AppOpsManager) context.getApplicationContext()
                .getSystemService(Context.APP_OPS_SERVICE);

        int mode = appOps.checkOpNoThrow(OPSTR_GET_USAGE_STATS,
                android.os.Process.myUid(), context.getApplicationContext().getPackageName());

        if (mode == AppOpsManager.MODE_DEFAULT) {

            return (context.getApplicationContext().checkCallingOrSelfPermission(
                    android.Manifest.permission.PACKAGE_USAGE_STATS) == PackageManager.PERMISSION_GRANTED);
        } else {
            return (mode == MODE_ALLOWED);
        }
    }

    /**
     * load the usage stats for last 24h
     */

    @ReactMethod
    public void loadStatistics(Promise promise) {
        Context context = getReactApplicationContext();
        UsageStatsManager usm = (UsageStatsManager) context.getSystemService(context.USAGE_STATS_SERVICE);
        List<UsageStats> appList = usm.queryUsageStats(UsageStatsManager.INTERVAL_DAILY,
                System.currentTimeMillis() - 1000 * 3600 * 1, System.currentTimeMillis());
        appList = appList.stream().filter(app -> app.getTotalTimeInForeground() > 0).collect(Collectors.toList());

        // Group the usageStats by application and sort them by total time in foreground
        if (appList.size() > 0) {
            WritableArray app_list = new WritableNativeArray();
            for (UsageStats usageStats : appList) {
                try {

                    WritableMap info = new WritableNativeMap();

                    PackageManager pm = context.getPackageManager();
                    ApplicationInfo ai = pm.getApplicationInfo(usageStats.getPackageName(),0);

                    String[] packageNames = usageStats.getPackageName().split("\\.");
                    String appName = packageNames[packageNames.length - 1].trim();

                    info.putString("name", appName);
                    info.putString("package_id", usageStats.getPackageName());
                    info.putString("first_timestamp", String.valueOf(usageStats.getFirstTimeStamp()));
                    info.putString("last_timestamp", String.valueOf(usageStats.getLastTimeStamp()));

                    if((ai.flags & ApplicationInfo.FLAG_IS_GAME) == ApplicationInfo.FLAG_IS_GAME){
                        info.putString("is_game", String.valueOf(true));
                    }

                    // ...

                    app_list.pushMap(info);
                } catch (Exception ex) {
                    System.err.println("Exception: " + ex.getMessage());
                }
            }

            try {

                promise.resolve(app_list);
            } catch (Exception e) {
                promise.reject("Create Event Error", e);
            }
        }
    }

}