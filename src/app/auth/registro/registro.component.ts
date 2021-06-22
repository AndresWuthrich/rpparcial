import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // email: string = '';
  // password: string = '';
  public signup: boolean;
  public registroUp: boolean;
  public condicion: boolean = false;
  public perfil: string = '';
  // private imagenPerfil: any;

  public usuarioAlta: Usuario = new Usuario();

  private dbpath = '/usuarios';

  usuarioIngresado: any;
  
  public formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, public auth: AuthService) {
    // this.usuarioIngresado = this.authService.usuario;
    this.signup = false;
    this.registroUp = false;

    this.formRegistro = this.fb.group({
      'nombre':['', Validators.required],
      'apellido':['', Validators.required],
      'perfil':['', Validators.required],
      'email':['', Validators.required],
      'password':['', [Validators.required, Validators.minLength(6)]]
      // 'imagen':['', Validators.required]
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

  // private onCaptchaComplete(response: any) {
  //   console.log('reCAPTCHA response recieved:');
  //   console.log(response.success);
  //   console.log(response.token);
  // }

  elegirPerfil(perfil: string){
    this.perfil = perfil;
  }

  async registro(){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

    this.auth.Registro(email, password).then(value => { 
      console.log(value?.user?.uid);

      this.usuarioAlta.nombre = this.formRegistro.controls['nombre'].value;
      this.usuarioAlta.apellido = this.formRegistro.controls['apellido'].value;
      // this.usuarioAlta.perfil = this.perfil;
      this.usuarioAlta.perfil = this.formRegistro.controls['perfil'].value;
      this.usuarioAlta.email = this.formRegistro.controls['email'].value;
      this.usuarioAlta.clave = this.formRegistro.controls['password'].value;
      // this.usuarioAlta.imagenPerfil = this.formRegistro.controls['imagen'].value;
      // this.usuarioAlta.uid = this.auth.usuario.uid;
      this.usuarioAlta.uid = value?.user?.uid;
 
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
        this.usuarioService.agregarUsuario(this.usuarioAlta);
        // this.email = this.password = '';
      // }
      // this.router.navigate(['verificacion-email']);
      this.router.navigate(['bienvenida']);
      });
    // console.log(this.auth.usuario.uid);
  }

  // cargarImagen(event: any): void {
  //   this.imagenPerfil = event.target.files[0];
  //   console.log(this.imagenPerfil);
  // }

  // cargarImagen2(event: any): void {
  //   this.imagenPerfil2 = event.target.files[0];
  //   console.log(this.imagenPerfil2);
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
