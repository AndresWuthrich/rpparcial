import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-listado-pizza',
  templateUrl: './listado-pizza.component.html',
  styleUrls: ['./listado-pizza.component.css']
})
export class ListadoPizzaComponent implements OnInit {

  @Output() eventoPizzaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaPizzas!: Pizza[];

  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoPizzaSeleccionada(pizza: Pizza){
    console.log("1");
    this.eventoPizzaSeleccionada.emit(pizza);
  }
}
