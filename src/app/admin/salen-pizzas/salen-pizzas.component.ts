import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent implements OnInit {

  listaPizzas!: Pizza[];
  pizzaSeleccionada: Pizza | null = null;
  
  constructor(private pizzaService: PizzaService) {
      this.pizzaService.traerTodas().subscribe((pizzas: Pizza[]) => {
      console.log(pizzas);
      this.listaPizzas = pizzas;
    });

   }

  ngOnInit(): void {
  }

  obtenerPizzaSeleccionada(pizza: Pizza){
    this.pizzaSeleccionada = pizza;
    console.log(this.pizzaSeleccionada);
  }
}
