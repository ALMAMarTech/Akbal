import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./vista/home/home.component";
import {PartnersComponent} from "./vista/partners/partners.component";
import {BuildingComponent} from "./vista/building/building.component";
import {CalculadoraComponent} from "./vista/calculadora/calculadora.component";
import {AvisoDePrivacidadComponent} from "./component/aviso-de-privacidad/aviso-de-privacidad.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent, data:{title: 'Akbal'}},
  {path:'partners', component: PartnersComponent, data:{title: 'Partners'}},
  {path:'building', component: BuildingComponent, data: {title: 'Building Town System'}},
  {path: 'calculadora', component: CalculadoraComponent, data: {title: 'Calculadora de beneficios'}},
  {path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent, data: {title: 'Aviso de privacidad'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled", onSameUrlNavigation: "ignore", anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, PartnersComponent, BuildingComponent, CalculadoraComponent, AvisoDePrivacidadComponent]
