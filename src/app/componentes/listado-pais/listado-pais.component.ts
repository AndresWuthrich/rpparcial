import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-listado-pais',
  templateUrl: './listado-pais.component.html',
  styleUrls: ['./listado-pais.component.css']
})
export class ListadoPaisComponent implements OnInit {

  @Output() eventoPaisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaPais!: Pais[];
  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoPaisSeleccionado(pais: Pais){
    console.log("1");
    this.eventoPaisSeleccionado.emit(pais);
  }
}
