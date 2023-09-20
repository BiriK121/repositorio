import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INICIOComponent} from '../app/Component/pages/inicio/inicio.component'
import {GALERIAComponent} from '../app/Component/pages/galeria/galeria.component'

const routes: Routes = [
  {path:'Inicio',component:INICIOComponent},
   {path:'Galeria',component:GALERIAComponent},
  {path:'**',component:INICIOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
