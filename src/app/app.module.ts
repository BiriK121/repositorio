import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './Component/navbar/navbar.component';
import { PAGESComponent } from './Component/pages/pages.component';
import { DATOSComponent } from './Component/PAGES/datos/datos.component';
import { GALERIAComponent } from './Component/PAGES/galeria/galeria.component';
import { INICIOComponent } from './Component/PAGES/inicio/inicio.component';
import { MAPAComponent } from './Component/PAGES/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    PAGESComponent,
    DATOSComponent,
    GALERIAComponent,
    INICIOComponent,
    MAPAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
