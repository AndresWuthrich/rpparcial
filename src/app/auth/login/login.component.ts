import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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

    // try{
      const usuarioLogin = await this.auth.Ingresar(this.email, this.password);
      console.log('IN!!!', usuarioLogin);


      //if (usuarioLogin) && usuarioLogin.user?.emailVerified)
      //   console.log('USER', usuarioLogin);

        // this.usuarioService.traerTodos().subscribe((usuarios: Usuario[]) => {
        //   console.log(usuarios);
        //   usuarios.forEach(usuario => {
        //     if(usuario.uid == usuarioLogin.user.uid){
      //         if(usuario.perfil == 'especialista' && usuario.cuentaAprobada == false ){

      //           console.log('HOLA', usuarioLogin);
      //           console.log('HOLA2', usuario);

      //           this.auth.Logout();

      //           Swal.fire({
      //             title: 'Cuenta de usuario especialista debe ser aprobada por administrador'
      //           });

                // if(usuario.perfil == 'administrador'){
                //   this.router.navigate(['admin']);
                // } else {
                //   this.router.navigate(['home']);
                // }

                // this.router.navigate(['home']);
      //         } else {

                 this.router.navigate(['bienvenida']);
      //         }
        //     }
        //   })
        // });
      //   // this.router.navigate(['bienvenido']);
      // }else if (usuarioLogin && usuarioLogin.user?.emailVerified==false){
      //   this.router.navigate(['verificacion-email']);
      // } else {
      //   this.router.navigate(['registro']);    
      // } 
    // }catch (error){
    // console.log('error');
    // }

    // this.email=this.password="";

    // if(this.auth.errorLogin){
    //   Swal.fire({
    //     title: this.auth.errorLogin
    //   });
    //   }
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

    // this.email="andreswuthrich82@gmail.com";
    // this.password="adw1982";
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
