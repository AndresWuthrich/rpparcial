import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/clases/pizza';
import { Repartidor } from 'src/app/clases/repartidor';
import { Reparto } from 'src/app/clases/reparto';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { RepartoService } from 'src/app/services/reparto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alta-reparto',
  templateUrl: './alta-reparto.component.html',
  styleUrls: ['./alta-reparto.component.css']
})
export class AltaRepartoComponent implements OnInit {

  // email: string = '';
  // password: string = '';
  public signup: boolean;
  public registroUp: boolean;
  public condicion: boolean = false;
  public perfil: string = '';
  // private imagenPerfil: any;
  repartidorSeleccionado: Repartidor | null = null;

  public repartoAlta: Reparto = new Reparto();

  @Input() repartidorElegido: Repartidor | null = null;
  
  private dbpath = '/repartos';

  usuarioIngresado: any;
  
  public formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private repartoService: RepartoService, private usuarioService: UsuarioService, private pizzaService: PizzaService, private router: Router, public auth: AuthService) {
    // this.usuarioIngresado = this.authService.usuario;
    this.signup = false;
    this.registroUp = false;

    this.formRegistro = this.fb.group({
      'nombre':['', Validators.required],
      'ingredientes':['', Validators.required],
      'pizza':['', Validators.required]
    });

    console.log(this.repartidorSeleccionado);
    console.log(this.repartidorElegido);

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

      // this.repartoAlta.reparto = this.formRegistro.controls['nombre'].value;
      this.repartoAlta.repartidor = this.formRegistro.controls['ingredientes'].value;
      this.repartoAlta.pizzas = this.formRegistro.controls['pizza'].value;

      this.repartoService.agregarReparto(this.repartoAlta);
  }

  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
  }

}
