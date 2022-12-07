import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ImgComponent } from './pages/img/img.component';
import { InsumosParaJardineriaComponent } from './pages/insumos-para-jardineria/insumos-para-jardineria.component';
import { PlantasComponent } from './pages/plantas/plantas.component';
import { PortaMacetasComponent } from './pages/porta-macetas/porta-macetas.component';

const routes: Routes = [
  {path:'', redirectTo: '/img', pathMatch:'full'},
  {path:'img', component: ImgComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'insumos-para-jardineria', component: InsumosParaJardineriaComponent},
  {path:'plantas', component: PlantasComponent},
  {path:'porta-macetas', component: PortaMacetasComponent},
  {path:'**', component: ImgComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
