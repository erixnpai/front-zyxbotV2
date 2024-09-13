import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"zyxbotv2","appId":"1:597451381083:web:75ba002d34bcd9ea91e27e","storageBucket":"zyxbotv2.appspot.com","apiKey":"AIzaSyBZlyJKltZOWPkPPXLgkQnH65Km4NNhRUE","authDomain":"zyxbotv2.firebaseapp.com","messagingSenderId":"597451381083"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
