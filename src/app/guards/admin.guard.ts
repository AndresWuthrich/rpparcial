import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from '../services/auth.service';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanDeactivate<unknown> {

  public userLogueado: Observable<any> = this.auth.fireStoreAuth.user;
  public usuarioLogueado: Usuario | null = null;

  constructor(private usuarioService: UsuarioService, public auth: AuthService){}

  canActivate(): Observable<boolean> | boolean | Promise<boolean> {

      console.log("verif");

      return this.obtenerUsuario();

      // return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  async obtenerUsuario() : Promise<boolean>{

    var user: any = await this.auth.obtenerUsuarioActual();
    // console.log("1 ",user);
    console.log("1 email",user.email);

    if (user?.email != null && user) {
       console.log("2 ",user.email);
      var dataUser: any = await this.usuarioService.obtenerUsuarioPorEmail(user.email);
      this.usuarioLogueado = dataUser;
      console.log("perfil",this.usuarioLogueado?.perfil);
      if(this.usuarioLogueado?.perfil == 'administrador'){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
    // return false;
  }
}
