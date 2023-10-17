import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './Component/navbar/navbar.component';
import { PAGESComponent } from './Component/pages/pages.component';
import { DATOSComponent } from './Component/pages/datos/datos.component';
import { GALERIAComponent } from './Component/pages/galeria/galeria.component';
import { INICIOComponent } from './Component/pages/inicio/inicio.component';
import { MAPAComponent } from './Component/pages/mapa/mapa.component';
import { FooterComponent } from './Component/pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallerComponent } from './Component/pages/datos/detaller/detaller.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    PAGESComponent,
    DATOSComponent,
    GALERIAComponent,
    INICIOComponent,
    MAPAComponent,
    FooterComponent,
    DetallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
