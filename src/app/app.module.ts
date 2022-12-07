import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './pages/img/img.component';
import { NavTabsComponent } from './pages/nav-tabs/nav-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
