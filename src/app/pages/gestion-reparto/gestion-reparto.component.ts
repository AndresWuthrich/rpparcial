import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

import { Repartidor } from 'src/app/clases/repartidor';
import { PizzaService } from 'src/app/services/pizza.service';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-gestion-reparto',
  templateUrl: './gestion-reparto.component.html',
  styleUrls: ['./gestion-reparto.component.css']
})
export class GestionRepartoComponent implements OnInit {

  listaRepartidores!: Repartidor[];
  listaPizzas!: Pizza[];
  listaPizzasSeleccionadas!: Pizza[];
  repartidorSeleccionado: Repartidor | null = null;
  pizzaSeleccionada: Pizza | null = null;
  
  constructor(private repartidorService: RepartidorService, private pizzaService: PizzaService) {
      this.repartidorService.traerTodos().subscribe((repartidores: Repartidor[]) => {
      console.log(repartidores);
      this.listaRepartidores = repartidores;
  
    });

    this.pizzaService.traerTodas().subscribe((pizzas: Pizza[]) => {
      console.log(pizzas);
      this.listaPizzas = pizzas;
  
    });

   }

  ngOnInit(): void {
  }

  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
  }

  obtenerPizzaSeleccionada(pizza: Pizza){
    this.pizzaSeleccionada = pizza;
    console.log(this.pizzaSeleccionada);
    this.listaPizzasSeleccionadas.push(pizza);

  }}
