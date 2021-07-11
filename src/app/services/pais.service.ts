import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Pais } from '../clases/pais';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private filePath: any;
  private dbPath = '/paises';
  // private downloadURL: Observable<string>;
  // public itemsCollection: AngularFirestoreCollection<Pais>;
  // public paises: Observable<Pais[]>;
  public usuarioLogueado: Usuario | null = null;

  constructor(private http: HttpClient) { }

  // async todos2() {
  //   return this.http.get(`${environment.baseUrlApi}`).toPromise()
  // }

  todos() {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

  todosPorRegion(region:string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }
  
  conseguirPorNombre(nombre:string){
    // console.log(`https://restcountries.eu/rest/v2/name/${nombre}?fullText=true`);
    return this.http.get(`https://restcountries.eu/rest/v2/name/${nombre}?fullText=true`);
  }
}
