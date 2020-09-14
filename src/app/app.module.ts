import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppbodyComponent } from './appbody/appbody.component';
import { MenulistleftComponent } from './menulistleft/menulistleft.component';
import { BodycontentrightComponent } from './bodycontentright/bodycontentright.component';
import { SettingsComponent } from './settings/settings.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api-config.service';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    AppRoutingModule,
    HttpClientModule,
    // Ng2SearchPipeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
