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

  }

  ngOnInit(): void {
  }

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

      this.usuarioService.agregarUsuario(this.usuarioAlta);

      this.router.navigate(['bienvenida']);
      });
    // console.log(this.auth.usuario.uid);
  }

}
