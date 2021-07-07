import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

import { Repartidor } from 'src/app/clases/repartidor';
import { Reparto } from 'src/app/clases/reparto';
import { PizzaService } from 'src/app/services/pizza.service';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { RepartoService } from 'src/app/services/reparto.service';

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
  limite: string = '';
  public signup: boolean;
  public repartoAlta: Reparto = new Reparto();

  constructor(private repartidorService: RepartidorService, private pizzaService: PizzaService, private repartoService: RepartoService) {
      this.repartidorService.traerTodos().subscribe((repartidores: Repartidor[]) => {
      console.log(repartidores);
      this.listaRepartidores = repartidores;
  
    });

    this.pizzaService.traerTodas().subscribe((pizzas: Pizza[]) => {
      console.log(pizzas);
      this.listaPizzas = pizzas;
  
    });
    this.signup = false;

   }

  ngOnInit(): void {
  }

  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
    this.listaPizzasSeleccionadas=[];
  }

  obtenerPizzaSeleccionada(pizza: Pizza){
    this.pizzaSeleccionada = pizza;
    console.log("ps",this.pizzaSeleccionada);

    if(this.repartidorSeleccionado != null){
      if(this.listaPizzasSeleccionadas.length < this.repartidorSeleccionado?.capacidadTrans)
      {
        this.listaPizzasSeleccionadas.push(pizza);
      } else{
        this.limite = "Alcanzó el límite de capacidad de transporte";
      }  
    }

    console.log("lps",this.listaPizzasSeleccionadas);
  }

  async registro(){
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

    // this.repartoAlta.reparto = this.formRegistro.controls['nombre'].value;
    this.repartoAlta.repartidor = this.repartidorSeleccionado;
    this.repartoAlta.pizzas = this.listaPizzasSeleccionadas;

    this.repartoService.agregarReparto(this.repartoAlta);
  }
}
