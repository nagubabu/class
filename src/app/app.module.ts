import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { Contacts } from '@ionic-native/contacts';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CameraPage} from '../pages/camera/camera';
import { MapsPage} from '../pages/maps/maps'
import { NotificationsPage} from '../pages/notifications/notifications';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalProvider } from '../providers/global/global';
import { ApiProvider } from '../providers/api/api';
import { Camera } from '@ionic-native/camera';
import { AppbrowserPage} from '../pages/appbrowser/appbrowser';
import { CustomcommponentseComponent } from '../components/customcommponentse/customcommponentse';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,MapsPage,AppbrowserPage,NotificationsPage,CustomcommponentseComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage,MapsPage,AppbrowserPage,NotificationsPage,CustomcommponentseComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    NativeStorage,
    ApiProvider,
    Toast,
    Network,
    Camera,
    Contacts,GoogleMaps,InAppBrowser,LocalNotifications
  ]
})
export class AppModule {}
