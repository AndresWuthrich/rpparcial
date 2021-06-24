import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean;
  public autocompletar: string = '';
  public listaUsuariosAccesoRapido: Usuario[] = [];
  public usuario: Usuario | null = null;
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, public auth: AuthService, public router: Router) {
    this.loading = false;
   }

  ngOnInit(): void {
  }

  async Ingresar(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);

    try{
      const usuarioLogin = await this.auth.Ingresar(this.email, this.password);
      console.log('IN!!!', usuarioLogin);


      if (usuarioLogin){// && usuarioLogin.user?.emailVerified)
         console.log('USER', usuarioLogin.user.uid);

        var flag = 0; 
        this.usuarioService.traerTodos().subscribe((usuarios: Usuario[]) => {
          usuarios.forEach(usuario => {
            console.log('uid', usuario.uid);
            if(usuario.uid == usuarioLogin.user.uid){
              flag = 1;     
              this.router.navigate(['bienvenida']);           
            } 
         })
         if(flag == 0){
          this.router.navigate(['registro']);  
        }
      });
      }
    }catch (error){
 
      Swal.fire({
        title: error.code,
        text: error.message
      });
      }

    }

  Autocompletar(){
    this.autocompletar='si';

    this.usuarioService.traerTodos().subscribe((usuarios: Usuario[]) => {
      console.log(usuarios);
      this.listaUsuariosAccesoRapido = usuarios;
    });

    // this.usuario = {
    //   nombre: 'Andrés',
    //   apellido: 'Wüthrich',
    //   email: 'andreswuthrich82@gmail.com',
    //   clave: 'adw1982',
    //   perfil: 'administrador'
    // }
    // this.listaUsuariosAccesoRapido.push(this.usuario);

    // this.usuario = {
    //   nombre: 'Irene',
    //   apellido: 'Dreiling',
    //   email: 'irenedreiling@hotmail.com',
    //   clave: 'mid1981',
    //   perfil: 'empleado'
    // }
    // this.listaUsuariosAccesoRapido.push(this.usuario);
  }

  cargarUsuariosAccesoRapido(email: string){
    console.log(this.listaUsuariosAccesoRapido);
    
    this.listaUsuariosAccesoRapido.forEach(usuario => {
      if(usuario.email == email){
        this.email = usuario.email;
        this.password = usuario.clave;
      }
    });
  }
}
