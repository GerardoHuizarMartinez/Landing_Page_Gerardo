import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes),  
    
    provideFirebaseApp(() => initializeApp({ 
      projectId: 'landingpagegerardo',
      appId: '1:854917038623:web:7cc8e9cb54f9a75f200b2a',
      storageBucket: 'landingpagegerardo.appspot.com',
      apiKey: 'AIzaSyBYzT9MPmj7Zbf5RyOyHond8LXR8BA2zzw',
      authDomain: 'landingpagegerardo.firebaseapp.com',
      messagingSenderId: '854917038623',
     })),
    provideFirestore(() => getFirestore()),
  ],
};
