import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatusYSuculentasComponent } from './pages/catus-y-suculentas/catus-y-suculentas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ImgComponent } from './pages/shared/img/img.component';
import { InsumosParaJardineriaComponent } from './pages/insumos-para-jardineria/insumos-para-jardineria.component';
import { MacetasBarroComponent } from './pages/macetas-barro/macetas-barro.component';
import { MacetasDecoComponent } from './pages/macetas-deco/macetas-deco.component';
import { MacetasPlasticoComponent } from './pages/macetas-plastico/macetas-plastico.component';
import { MacetasComponent } from './pages/macetas/macetas.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { PortaMacetasComponent } from './pages/porta-macetas/porta-macetas.component';

const routes: Routes = [
  {path:'', redirectTo: '/img', pathMatch:'full'},
  {path:'cactus-y-suculentas', component: CatusYSuculentasComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'img', component: ImgComponent},
  {path:'insumos-para-jardineria', component: InsumosParaJardineriaComponent},
  {path:'macetas', component: MacetasComponent},
  {path:'macetas-deco', component: MacetasDecoComponent},
  {path:'macetas-plastico', component: MacetasPlasticoComponent},
  {path:'macetas-barro', component: MacetasBarroComponent},
  {path:'plantas', component: PlantasComponent},
  {path:'porta-macetas', component: PortaMacetasComponent},
  {path:'**', component: ImgComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
