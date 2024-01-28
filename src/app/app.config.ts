import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "reaganportfolio-312cf", "appId": "1:97976991800:web:9c37946f4efdd7b104a6cd", "storageBucket": "reaganportfolio-312cf.appspot.com", "apiKey": "AIzaSyCEVjHLD6IpQ4QYjjpGOd45nAD5-TofrxY", "authDomain": "reaganportfolio-312cf.firebaseapp.com", "messagingSenderId": "97976991800", "measurementId": "G-WM6QSB3CX6" }))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService]
};
