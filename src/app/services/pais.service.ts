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

  // async conseguirId(id: string) {
  //   return this.http.get(`${environment.baseUrlApi}${id}`).toPromise()
  // }



  // constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public auth: AuthService) {
  //   this.itemsCollection = this.afs.collection(this.dbPath);

  //   this.paises = this.itemsCollection.snapshotChanges().pipe(map(actions => {
  //     return actions.map(a => {
  //       const data = a.payload.doc.data() as unknown as Pais;
  //       return data;
  //     });
  //   }));

  //   var usuarioActual = this.auth.obtenerUsuarioActual();

  //  }

  // traerAlumnos(){
  //   // return this.usuarios.pipe(map(value => 
  //   //   { return value.filter(user => 
  //   //    { return user.perfil == "alumno"; });
  //   // }));
  // }

  // traerTodos(){
  //   return this.paises;
  // }

  // async obtenerDocumentoUsuario(user: Usuario) {
  //   var value = await this.afs.collection(this.dbPath).ref.where('email', '==', user.email).get();
  //   if (value.docs[0].exists) {
  //     return value.docs[0].id;
  //   }
  //   else {
  //     return null;
  //   }
  // }

  // async obtenerUsuarioPorEmail(email: string) {
  //   return new Promise((resolve, reject) => {this.afs.collection(this.dbPath).get().subscribe((querySnapshot) => {
  //     let doc = querySnapshot.docs.find(doc => (doc.data() as Usuario).email == email);
  //     resolve(doc?.data());
  //     console.log(doc);
  //   })
  //   });
  // }
}
