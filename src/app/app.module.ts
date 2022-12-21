import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// mis modulos

// mis componentes
import { ImgComponent } from './pages/shared/img/img.component';
import { NavTabsComponent } from './pages/nav-tabs/nav-tabs.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InsumosParaJardineriaComponent } from './pages/insumos-para-jardineria/insumos-para-jardineria.component';
import { PortaMacetasComponent } from './pages/porta-macetas/porta-macetas.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { CatusYSuculentasComponent } from './pages/catus-y-suculentas/catus-y-suculentas.component';
import { LoadingComponent } from './pages/shared/loading/loading.component';
import { MacetasBarroComponent } from './pages/macetas-barro/macetas-barro.component';
import { MacetasDecoComponent } from './pages/macetas-deco/macetas-deco.component';
import { MacetasPlasticoComponent } from './pages/macetas-plastico/macetas-plastico.component';
import { CardComponent } from './pages/shared/card/card.component';





@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavTabsComponent,
    ContactoComponent,
    InsumosParaJardineriaComponent,
    PortaMacetasComponent,
    PlantasComponent,
    CatusYSuculentasComponent,
    LoadingComponent,
    MacetasBarroComponent,
    MacetasDecoComponent,
    MacetasPlasticoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
