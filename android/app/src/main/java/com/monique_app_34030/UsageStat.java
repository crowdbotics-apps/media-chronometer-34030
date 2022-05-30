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

import android.widget.Toast;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.SortedMap;
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

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod
    private void init() {
        Context context = getReactApplicationContext();
        if (getGrantStatus()) {
            showHideWithPermission();

            Toast.makeText(context, "there is permission", Toast.LENGTH_LONG).show();
        } else {
            showHideNoPermission();
            context.startActivity(new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS));
            Toast.makeText(context, "there is no permission", Toast.LENGTH_LONG).show();
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

    public void showHideNoPermission() {
        // enableBtn.setVisibility(View.VISIBLE);
        // permissionDescriptionTv.setVisibility(View.VISIBLE);
        // showBtn.setVisibility(View.GONE);
        // usageTv.setVisibility(View.GONE);
        // appsList.setVisibility(View.GONE);

    }

    public void showHideWithPermission() {
        // enableBtn.setVisibility(View.GONE);
        // permissionDescriptionTv.setVisibility(View.GONE);
        // showBtn.setVisibility(View.VISIBLE);
        // usageTv.setVisibility(View.GONE);
        // appsList.setVisibility(View.GONE);
    }
}