import {Component, Input, OnInit} from '@angular/core';
import {MapaService} from "../../component/mapa.service";
//@ts-ignore
import terrenos from '../../../assets/json/terrenos.json';
@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  public terrenosList :{Etapa:string,Lote:number,TIPO:string,Metraje:number,Inversion:string,Contado:string,Status:string,Consecutivo:number}[] = terrenos;
  @Input() terreno: number = 0;

  public selected:any;
  constructor(public mapaService: MapaService) {
    }

  ngOnInit(): void {
    return this.selected;
  }
  //@ts-ignore
  changeTab(tab){
    this.terreno = tab;
    console.log(tab);
  }


  data(){
    // @ts-ignore
    return this.selected = 0;
  }
}
