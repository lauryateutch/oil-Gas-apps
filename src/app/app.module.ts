import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAQ9CX-OmBV9h2z_JL38tUMcHiLiY5_0Rs",
  authDomain: "oil-gas-d2950.firebaseapp.com",
  projectId: "oil-gas-d2950",
  storageBucket: "oil-gas-d2950.appspot.com",
  messagingSenderId: "1083502337749",
  appId: "1:1083502337749:web:79b76d4adc68abe6240c5c",
  measurementId: "G-FPDPZWWW4P"
};
@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, 
    IonicModule.forRoot(),
    HttpClientModule,
     AppRoutingModule,
     
    ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule {}
