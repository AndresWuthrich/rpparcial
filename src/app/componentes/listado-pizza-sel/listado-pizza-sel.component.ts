import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';


@Component({
  selector: 'app-listado-pizza-sel',
  templateUrl: './listado-pizza-sel.component.html',
  styleUrls: ['./listado-pizza-sel.component.css']
})
export class ListadoPizzaSelComponent implements OnInit {

  @Output() eventoPizzaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  @Input() listaPizzasSeleccionadas: Pizza | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  enviarEventoPizzaSeleccionada(pizza: Pizza){
    console.log("1");
    this.eventoPizzaSeleccionada.emit(pizza);
  }
}