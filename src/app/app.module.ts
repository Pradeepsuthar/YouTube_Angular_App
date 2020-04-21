import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppbodyComponent } from './appbody/appbody.component';
import { MenulistleftComponent } from './menulistleft/menulistleft.component';
import { BodycontentrightComponent } from './bodycontentright/bodycontentright.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppbodyComponent,
    MenulistleftComponent,
    BodycontentrightComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
