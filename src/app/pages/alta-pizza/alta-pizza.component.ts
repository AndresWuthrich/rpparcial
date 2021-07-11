import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/clases/pizza';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  // email: string = '';
  // password: string = '';
  public signup: boolean;
  public registroUp: boolean;
  public condicion: boolean = false;
  public perfil: string = '';
  // private imagenPerfil: any;

  public pizzaAlta: Pizza = new Pizza();

  private dbpath = '/pizzas';

  usuarioIngresado: any;
  
  public formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private pizzaService: PizzaService, private router: Router, public auth: AuthService) {
    // this.usuarioIngresado = this.authService.usuario;
    this.signup = false;
    this.registroUp = false;

    this.formRegistro = this.fb.group({
      'nombre':['', Validators.required],
      'ingredientes':['', Validators.required],
      'precio':['', [Validators.required, Validators.min(1)]],
      'peso':['', [Validators.required, Validators.min(500), Validators.max(1000)]]
    });

  }

  ngOnInit(): void {
  }

  async registro(){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

      this.pizzaAlta.nombre = this.formRegistro.controls['nombre'].value;
      this.pizzaAlta.ingredientes = this.formRegistro.controls['ingredientes'].value;
      this.pizzaAlta.precio = this.formRegistro.controls['precio'].value;
      this.pizzaAlta.peso = this.formRegistro.controls['peso'].value;
      this.pizzaAlta.estado = "";

      this.pizzaService.agregarPizza(this.pizzaAlta);
  }

}
