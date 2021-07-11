import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { PaisService } from 'src/app/services/pais.service';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  // email: string = '';
  // password: string = '';
  public signup: boolean;
  public registroUp: boolean;
  public condicion: boolean = false;
  public perfil: string = '';
  // private imagenPerfil: any;

  public listaPais!: Pais[];
  public paisSeleccionado: Pais | null = null;
  public region: string = 'Americas';

  public repartidorAlta: Repartidor = new Repartidor();

  private dbpath = '/usuarios';

  usuarioIngresado: any;
  
  public formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private repartidorService: RepartidorService, private paisService: PaisService, private router: Router, public auth: AuthService) {
    // this.usuarioIngresado = this.authService.usuario;
    this.signup = false;
    this.registroUp = false;

    this.formRegistro = this.fb.group({
      'nombre':['', Validators.required],
      'apellido':['', Validators.required],
      'edad':['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'dni':['', [Validators.required, Validators.min(1000000)]],
      'capacidad':['', Validators.required],
      'paisOrigen':[''],// Validators.required],
      'unidadPropia':['', Validators.required]
      // 'imagen':['', Validators.required],      
    });

    this.paisService.todosPorRegion(this.region).subscribe((paises) => {
      console.log(paises);
      // this.listaPais = paises;
      this.listaPais = JSON.parse(JSON.stringify(paises));
    });
  }

  ngOnInit(): void {
  }

  cambioDeRegion(){
    if(this.region == "Americas"){
      this.region = "europe";
    }
    else{
      this.region = "Americas";
    }
    this.paisService.todosPorRegion(this.region).subscribe((paises) => {
      console.log(paises);
      // this.listaPais = paises;
      this.listaPais = JSON.parse(JSON.stringify(paises));
    });
  }
  
  async registro(){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

      this.repartidorAlta.nombre = this.formRegistro.controls['nombre'].value;
      this.repartidorAlta.apellido = this.formRegistro.controls['apellido'].value;
      this.repartidorAlta.edad = this.formRegistro.controls['edad'].value;
      this.repartidorAlta.dni = this.formRegistro.controls['dni'].value;
      this.repartidorAlta.capacidadTrans = this.formRegistro.controls['capacidad'].value;
      this.repartidorAlta.paisOrigen = this.paisSeleccionado?.name;
      this.repartidorAlta.unidadPropia = this.formRegistro.controls['unidadPropia'].value;
      this.repartidorAlta.banderaPais = this.paisSeleccionado?.flag;

      this.repartidorService.agregarRepartidor(this.repartidorAlta);
  }

  obtenerPaisSeleccionado(pais: Pais){
    this.paisSeleccionado = pais;
    console.log(this.paisSeleccionado);
  }
}
