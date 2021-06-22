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
  // public especialidadAlta: Especialidad = new Especialidad();
  // public listaEspecialidades: Especialidad[] = [];
  // public banderaEspecialidadSeleccionada = true;
  // public listaEspecialidadesSeleccionadas: Array<Especialidad> = new Array<Especialidad>();
  // public descripcionEspecialidad: string = '';
  // public listaDiasSeleccionadas: Array<DiasAtencion> = new Array<DiasAtencion>();  

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
      'peso':['', [Validators.required, Validators.min(500), Validators.min(1000)]]
    });

    // this.especialidadService.traerTodas().subscribe((especialidades: Especialidad[]) => {
    //   console.log(especialidades);
    //   this.listaEspecialidades = especialidades;
    // });
  }

  ngOnInit(): void {
    // this.agregarDias();
  }

  // agregarDias() {

  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Lunes', 8, 19));
  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Martes', 8, 19));
  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Miercoles', 8, 19));
  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Jueves', 8, 19));
  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Viernes', 8, 19));
  //   this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Sabado', 8, 14));

  // }

  // elegirPerfil(perfil: string){
  //   this.perfil = perfil;
  // }

  async registro(){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

    // this.auth.Registro(email, password).then(value => { 
    //   console.log(value?.user?.uid);

      this.pizzaAlta.nombre = this.formRegistro.controls['nombre'].value;
      this.pizzaAlta.ingredientes = this.formRegistro.controls['ingredientes'].value;
      this.pizzaAlta.precio = this.formRegistro.controls['precio'].value;
      this.pizzaAlta.peso = this.formRegistro.controls['peso'].value;
      // this.usuarioAlta.uid = this.auth.usuario.uid;
      // this.usuarioAlta.uid = value?.user?.uid;
 
      // if(this.perfil=='paciente'){
      //   this.usuarioAlta.imagenPerfil2 = this.formRegistro.controls['imagen2'].value;
      //   this.usuarioAlta.obraSocial = this.formRegistro.controls['obraSocial'].value;
      //   this.usuarioAlta.cuentaAprobada = true;
        
      //   console.log(this.imagenPerfil);
      //   console.log(this.imagenPerfil2);
      //   this.usuarioService.agregarPaciente(this.imagenPerfil, this.imagenPerfil2, this.usuarioAlta);
        // this.email = this.password = '';
  
      // } else {
        // this.usuarioAlta.especialidad = this.formRegistro.controls['especialidad'].value;
        // this.usuarioAlta.especialidad = this.listaEspecialidadesSeleccionadas;

        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Lunes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Martes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Miercoles', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Jueves', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Viernes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Sabado', 8, 14));

        // this.usuarioAlta.horarioAtencion = this.listaDiasSeleccionadas;

        // console.log(this.imagenPerfil);
        // this.usuarioService.agregarEspecialista(this.imagenPerfil, this.usuarioAlta);
        this.pizzaService.agregarPizza(this.pizzaAlta);
        // this.email = this.password = '';
      // }
      // this.router.navigate(['verificacion-email']);
      // this.router.navigate(['bienvenido']);
      // });
    // console.log(this.auth.usuario.uid);
  }

  // cargarImagen(event: any): void {
  //   this.imagenPerfil = event.target.files[0];
  //   console.log(this.imagenPerfil);
  // }

  // agregarEspecialidad(especialidad: Especialidad){
  //   this.banderaEspecialidadSeleccionada = false;
  //   if(this.listaEspecialidadesSeleccionadas.includes(especialidad)){

  //   } else{
  //     this.listaEspecialidadesSeleccionadas.push(especialidad);
  //     this.formRegistro.controls['especialidad'].setValue(this.listaEspecialidadesSeleccionadas);
  //   }
  // }

  // agregarNuevaEspecialidad(){
  //   console.log();
  //   if(this.descripcionEspecialidad != ''){
  //     this.especialidadAlta.descripcion = this.descripcionEspecialidad;

  //     this.especialidadService.agregarEspecialidad(this.especialidadAlta);
  //   }
  // }
}
