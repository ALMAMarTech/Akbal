import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
//@ts-ignore
import * as $ from 'jquery';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }
  @Input() terreno: number = 1;
  @Output() terrenoselecto = new EventEmitter<number>();

  seleccion(index: number){
    this.terreno = index;
    this.terrenoselecto.emit(this.terreno);
  }


  abrirModal(){
//    this.modalService.abrirModal1();
  }
  abrirModal1() {
  //  this.modalService.abrirModal2();
  }
  abrirModal2(){
    //this.modalService.abrirModal3();
  }

  ngOnInit(): void {
  }
  change(){
    //@ts-ignore
    let radio = document.querySelector("input[name = tipo]:checked").value;
    if(radio =="1"){
      //@ts-ignore
      document.getElementById('co2.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co2').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('co3').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre3').classList.add('d-none');
    }else if(radio == "2"){
      //@ts-ignore
      document.getElementById('co2').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co2.1').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('co3.1').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre3').classList.add('d-none');
    }
  }
  change1(){
    //@ts-ignore
    let radio = document.querySelector("input[name = tipo1]:checked").value;
    if(radio =="11"){
      //@ts-ignore
      document.getElementById('pre2.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre2').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3').classList.add('d-none');
    }else if(radio == "22"){
      //@ts-ignore
      document.getElementById('pre2').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre2.1').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3.1').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('pre3').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3').classList.add('d-none');
    }else{
      //@ts-ignore
      document.getElementById('pre3').classList.remove('d-none');
    }
  }
  selection(){
    // @ts-ignore
    let variable = document.getElementById('esquema').value;
    // @ts-ignore
    if(variable == "1"){
      // @ts-ignore
      document.getElementById('m1').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('m2').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('m3').classList.remove('d-none');
      /*COINVERSIÓN*/
      // @ts-ignore
      document.getElementById('co1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('co2').classList.add('d-none');
      // @ts-ignore
      document.getElementById('co3').classList.add('d-none');
      // @ts-ignore
      document.getElementById('co2.1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('co3.1').classList.add('d-none');
      /*PREMIUM*/
      // @ts-ignore
      document.getElementById('pre1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre2').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre3').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre2.1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');

    } else if(variable == "2"){
      // @ts-ignore
      document.getElementById('co1').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('co2').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('co3').classList.remove('d-none');
      /*MICROINVERSIÓN*/
      // @ts-ignore
      document.getElementById('m1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('m2').classList.add('d-none');
      // @ts-ignore
      document.getElementById('m3').classList.add('d-none');

      // @ts-ignore
      document.getElementById('co2.1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('co3.1').classList.add('d-none');

      /*PREMIUM*/
      // @ts-ignore
      document.getElementById('pre1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre2').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre3').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre2.1').classList.add('d-none');
      // @ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');
    }else if(variable == "3"){
      // @ts-ignore
      document.getElementById('pre1').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('pre2').classList.remove('d-none');
      // @ts-ignore
      document.getElementById('pre3').classList.remove('d-none');
      //@ts-ignore
      document.getElementById('m2').classList.add('d-none');
      //@ts-ignore
      document.getElementById('m1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('m3').classList.add('d-none');

      //@ts-ignore
      document.getElementById('co2').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co2.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('co3.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre2.1').classList.add('d-none');
      //@ts-ignore
      document.getElementById('pre3.1').classList.add('d-none');
    }
  }
}
