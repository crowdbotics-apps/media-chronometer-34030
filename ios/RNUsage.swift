//
//  RNUsage.swift
//  monique_app_34030
//
//  Created by Akande Japhet on 18/06/2022.
//

import Foundation
import FamilyControls
import MobileCoreServices
import ManagedSettings
import DeviceActivity

extension DeviceActivityName{
  static let daily = Self("daily")
}

let schedule = DeviceActivitySchedule(
  intervalStart: DateComponents(hour: 0, minute: 0),
  intervalEnd: DateComponents(hour: 23, minute: 59),
  repeats: true
)

let center = DeviceActivityCenter()

@objc(RNUsage)
class RNUsage : NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }

  // Reference to use main thread
  @objc func open() -> Void {
    DispatchQueue.main.async {
      self._open()
    }
  }

  func _open() -> Void {
    
      AuthorizationCenter.shared.requestAuthorization { result in
        switch result {
        case .success:
          break
        case .failure(let error):
          print("error for screentime is \(error)")
        }
      }
      _ = AuthorizationCenter.shared.$authorizationStatus
          .sink() {_ in
          switch AuthorizationCenter.shared.authorizationStatus {
          case .notDetermined:
              print("not determined")
          case .denied:
              print("denied")
          case .approved:
            
          do{
            try center.startMonitoring(.daily, during: schedule)
          }catch{
            
          }
              print("approved")
          @unknown default:
              break
          }
      }
      
  }
}

class MyMonitor: DeviceActivityMonitor {
    let store = ManagedSettingsStore()
    override func intervalDidStart(for activity: DeviceActivityName) {
        super.intervalDidStart(for: activity)
        print("interval did start")
//        let model = MyModel.shared
//        let applications = model.selectionToDiscourage.applicationTokens
//        store.shield.applications = applications.isEmpty ? nil : applications
//        store.dateAndTime.requireAutomaticDateAndTime = true
    }

    override func intervalDidEnd(for activity: DeviceActivityName) {
        super.intervalDidEnd(for: activity)
      print("interval did start")
//        store.shield.applications = nil
//        store.dateAndTime.requireAutomaticDateAndTime = false
    }
}
