import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {INICIOComponent} from '../app/Component/pages/inicio/inicio.component'
import {GALERIAComponent} from '../app/Component/pages/galeria/galeria.component'
import { DATOSComponent } from './Component/pages/datos/datos.component';
import { DetallerComponent } from './Component/pages/datos/detaller/detaller.component';

const routes: Routes = [
  {path:'Inicio',component:INICIOComponent},
   {path:'Galeria',component:GALERIAComponent},
   {path:'Datos',component:DATOSComponent},
  {path:'**',component:INICIOComponent},
  {path:'Detalle/Id', component:DetallerComponent},
  {path:'**',component:INICIOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
