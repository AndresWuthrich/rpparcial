import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { first} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
// import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;
  public errorRegistro: String = '';
  public errorLogin: String = '';

  constructor(public fireStoreAuth: AngularFireAuth, private router: Router) {

    this.usuario = fireStoreAuth.authState;

    this.usuario = fireStoreAuth.authState.subscribe(user =>{
      this.usuario.email = user?.email;
      this.usuario.uid = user?.uid;
    });
   }

  async  Registro(email: string, password: string){
    try{
    const usuarioRegistrado = await this.fireStoreAuth.createUserWithEmailAndPassword(email, password);
    // .then(value => {
      console.log('Registro exitoso');
      // this.sendVerificationEmail();
      // this.router.navigate(['bienvenido']);
      return usuarioRegistrado;
    // })
    } catch(error)  {
      //this.errorRegistro = error.message;

      // Swal.fire({
      //   title: error.code,
      //   text: error.message
      // });

      return null;
      // this.router.navigate(['error']);
    }
  }

  async Ingresar(email: string, password: string){

    try{
    const resultado = await this.fireStoreAuth
    .signInWithEmailAndPassword(email, password);
    
    console.log("res ",resultado);
    return resultado;
  }catch(error)  {
  // //   this.errorLogin = error.message;
     console.log(error);

    // Swal.fire({
    //   title: error.code,
    //   text: error.message
    // });
  return error;
  //   // this.router.navigate(['error']);
  } 
}

  Logout(){
    this.fireStoreAuth.signOut();
    this.router.navigate(['bienvenida']);
  }

  obtenerUsuarioActual() {
    return this.fireStoreAuth.authState.pipe(first()).toPromise();
  }  
}
