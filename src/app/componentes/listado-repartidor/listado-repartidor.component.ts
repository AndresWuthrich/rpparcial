import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {

  @Output() eventoRepartidorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaRepartidores!: Repartidor[];

  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoRepartidorSeleccionado(repartidor: Repartidor){
    console.log("1");
    this.eventoRepartidorSeleccionado.emit(repartidor);
  }
}
