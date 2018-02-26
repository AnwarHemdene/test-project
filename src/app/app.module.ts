import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InvitationsPage } from '../pages/invitations/invitations';
import { PosterPage } from '../pages/poster/poster';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InscrirePage } from '../pages/inscrire/inscrire';

import { ProfilePage } from '../pages/profile/profile';
import { ParamsPage } from '../pages/params/params';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InvitationsPage,
    PosterPage,
    MessagesPage,
    ParamsPage,
    TabsPage,
    InscrirePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InvitationsPage,
    PosterPage,
    MessagesPage,
    ParamsPage,
    TabsPage,
    InscrirePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}