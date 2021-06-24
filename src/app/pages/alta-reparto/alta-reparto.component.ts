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
  // public especialidadAlta: Especialidad = new Especialidad();
  // public listaEspecialidades: Especialidad[] = [];
  // public banderaEspecialidadSeleccionada = true;
  // public listaEspecialidadesSeleccionadas: Array<Especialidad> = new Array<Especialidad>();
  // public descripcionEspecialidad: string = '';
  // public listaDiasSeleccionadas: Array<DiasAtencion> = new Array<DiasAtencion>();  

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

      this.repartoAlta.reparto = this.formRegistro.controls['nombre'].value;
      this.repartoAlta.repartidor = this.formRegistro.controls['ingredientes'].value;
      this.repartoAlta.pizzas = this.formRegistro.controls['pizza'].value;
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
        this.repartoService.agregarReparto(this.repartoAlta);
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
  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
  }

}
