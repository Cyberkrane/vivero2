import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// mis modulos

// mis componentes
import { ImgComponent } from './pages/img/img.component';
import { NavTabsComponent } from './pages/nav-tabs/nav-tabs.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InsumosParaJardineriaComponent } from './pages/insumos-para-jardineria/insumos-para-jardineria.component';
import { PortaMacetasComponent } from './pages/porta-macetas/porta-macetas.component';



@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavTabsComponent,
    ContactoComponent,
    InsumosParaJardineriaComponent,
    PortaMacetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
