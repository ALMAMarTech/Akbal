import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {MapaService} from "../mapa.service";
//@ts-ignore
import terrenos from '../../../assets/json/terrenos.json';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(public mapaService: MapaService) { }

  public terrenosList :{etapa:string,lote:number,tipo:string,metraje:number,inversion:string,contado:string,status:string,consecutivo:number}[] = terrenos;
  @Input() terreno: number = 1;
  @Output() terrenoselecto = new EventEmitter<number>();

  seleccion(index: number){
    this.terreno = index;
    this.terrenoselecto.emit(this.terreno);
  }

  ngOnInit(): void {

  }

}
