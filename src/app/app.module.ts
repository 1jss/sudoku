import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import swedishLocale from '@angular/common/locales/sv';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(swedishLocale, 'sv');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'sv' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
