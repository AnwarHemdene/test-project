import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InvitationsPage } from '../pages/invitations/invitations';
import { PosterPage } from '../pages/poster/poster';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { InscrirePage } from '../pages/inscrire/inscrire';
// import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { ParamsPage } from '../pages/params/params';
 import { AngularFireModule } from 'angularfire2';

 import { AngularFireDatabaseModule } from 'angularfire2/database';
 import { FIREBASE_CREDENTIALS } from './firebase.credentials';
 

import { ContentListPage } from '../pages/private-content-pages/content-list/content-list';
import { AddContentPage } from '../pages/private-content-pages/add-content/add-content';
import { EditContentItemPage } from '../pages/private-content-pages/edit-content-item/edit-content-item';


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
    ProfilePage,
    // ChatPage,
    ContentListPage,
    AddContentPage,
    EditContentItemPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
         // Initialise AngularFire with credientials from the dashboard
         AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
         // Import the AngularFireDatabaseModule to use database interactions
         AngularFireDatabaseModule
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
    ProfilePage,
    // ChatPage,
    ContentListPage,
    AddContentPage,
    EditContentItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}