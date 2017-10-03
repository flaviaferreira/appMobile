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
// PAGES - FIM

// SERVICES - INCIO
// SERVICES - FIM

import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HeaderComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderComponent,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
