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
  listaPizzas2!: Pizza[];
  listaPizzasSeleccionadas!: Pizza[];
  repartidorSeleccionado: Repartidor | null = null;
  pizzaSeleccionada: Pizza | null = null;
  limite: string = '';
  public signup: boolean;
  public repartoAlta: Reparto = new Reparto();

  constructor(private repartidorService: RepartidorService, private pizzaService: PizzaService, private repartoService: RepartoService) {
    this.repartidorService.traerTodos().subscribe((repartidores: Repartidor[]) => {
      console.log("r ",repartidores);
      this.listaRepartidores = repartidores;
  
    });

    // this.listaPizzasSeleccionadas=[];

    this.pizzaService.traerTodas().subscribe((pizzas: Pizza[]) => {
      console.log("p ",pizzas);
      this.listaPizzas = pizzas;
  
      console.log("p1 ",this.listaPizzas);
    });

    this.signup = false;
   }

  ngOnInit(): void {
  }

  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
    this.listaPizzasSeleccionadas=[];
    // this.listaPizzas2=[];
  }

  obtenerPizzaSeleccionada(pizza: Pizza){
    this.pizzaSeleccionada = pizza;
    console.log("ps",this.pizzaSeleccionada);

    if(this.repartidorSeleccionado != null){
      if(this.listaPizzasSeleccionadas.length < this.repartidorSeleccionado?.capacidadTrans)
      {
        this.listaPizzasSeleccionadas.push(pizza);

        this.listaPizzas2=[];
        this.listaPizzas.forEach(pizza => {
          var flag = 0;
          this.listaPizzasSeleccionadas.forEach(pizzaSel => {
            if(pizza == pizzaSel)
            { flag = 1;}
          })
          if(flag == 0){
            this.listaPizzas2.push(pizza);
          }        
        });
        console.log("p2 ",this.listaPizzas2);
        this.listaPizzas = this.listaPizzas2;

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
