import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ImgComponent } from './pages/img/img.component';

const routes: Routes = [
  {path:'', redirectTo: '/img', pathMatch:'full'},
  {path:'img', component: ImgComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'**', component: ImgComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
