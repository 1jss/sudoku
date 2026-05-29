import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import swedishLocale from '@angular/common/locales/sv';

registerLocaleData(swedishLocale, 'sv');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'sv' }
  ]
};
