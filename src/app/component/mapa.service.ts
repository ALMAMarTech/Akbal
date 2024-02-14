import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  change:EventEmitter<any> = new EventEmitter();
    lanzar(index: number){
    this.change.emit(index);
  }
  getLanzar(){
      return this.change;
  }
  constructor() { }
}
