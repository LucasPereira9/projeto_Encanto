import React, {Component} from 'react';
import OneSignal from 'react-native-onesignal';
import {Platform} from 'react-native';
import Routes from '../../Routes';

export default class App extends Component<{}> {
  constructor(properties: any) {
    super(properties);

    OneSignal.setAppId('3a4bde82-1aa8-419d-b71b-4cc4ddc741f6');
    //Remove this method to stop OneSignal Debugging
    OneSignal.setLogLevel(6, 0);

    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    if (Platform.OS === 'ios') {
      OneSignal.promptForPushNotificationsWithUserResponse(() => {});
    }

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        //Silence notification by calling complete() with no argument
        notificationReceivedEvent.complete(notification);
      },
    );
  }

  render() {
    return <Routes />;
  }
}
