// DEPENDENCES - INICIO
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// DEPENDENCES - FIM

// COMPONENTS - INICIO
import { MyApp } from './app.component';
import { HeaderComponent } from "./common/components/header/header.component";
// COMPONENTS - FIM

// PAGES - INICIO
import { HomePage } from '../pages/home/home';
import { ChangePasswordPage } from './../pages/profile/change-password/change-password';
import { ProfilePage } from './../pages/profile/profile';
// PAGES - FIM

// SERVICES - INCIO
import { AccountService } from './../providers/account.service';
import { UserService } from './../providers/user.service';
// SERVICES - FIM

@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
    HomePage,
    ChangePasswordPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderComponent,
    HomePage,
    ChangePasswordPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AccountService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
