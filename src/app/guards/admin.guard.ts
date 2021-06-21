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

  public usuarioLogueado: Usuario | null = null;

  constructor(private usuarioService: UsuarioService, public auth: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("verif");

      var user = this.auth.usuario;
      // var user = await this.auth.getCurrentUser();
      if (user?.email != null && user) {
        console.log(user.email);
        var dataUser: any = this.usuarioService.obtenerUsuarioPorEmail(user.email);
        this.usuarioLogueado = dataUser;
        console.log("perfil",this.usuarioLogueado?.perfil);
        if(this.usuarioLogueado?.perfil == 'administrador'){
          return true;
        } else {
          return true;
        }
      } else {
        return false;
      }
    
      // return this.obtenerUsuario();
      // return false;
  
      // return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
