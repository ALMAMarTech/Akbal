import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { FooterComponent } from './cabecera/footer/footer.component';
import { HomeComponent } from './vista/home/home.component';
import { BuildingComponent } from './vista/building/building.component';
import { PartnersComponent } from './vista/partners/partners.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { CalculadoraComponent } from './vista/calculadora/calculadora.component';
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {CarouselModule} from "ngx-owl-carousel-o";
import { HomeTopComponent } from './component/home/home-top/home-top.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AvisoDePrivacidadComponent } from './component/aviso-de-privacidad/aviso-de-privacidad.component';
import { MapaComponent } from './component/mapa/mapa.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    BuildingComponent,
    PartnersComponent,
    ContactoComponent,
    RoutingComponents,
    CalculadoraComponent,
    HomeTopComponent,
    AvisoDePrivacidadComponent,
    MapaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
