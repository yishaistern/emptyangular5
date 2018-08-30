import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Settings } from './classes/global-objects/settings';

/** services */
import { GetHttpService } from './services/get-http/get-http.service';
import { PostHttpService } from './services/post-http/post-http.service';
import {SettingsService} from './services/settings/settings.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Settings, GetHttpService, PostHttpService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
