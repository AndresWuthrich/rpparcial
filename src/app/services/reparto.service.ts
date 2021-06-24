import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Pizza } from '../clases/pizza';
import { Reparto } from '../clases/reparto';

@Injectable({
  providedIn: 'root'
})
export class RepartoService {

  private filePath: any;
  private dbPath = '/repartos';
  // private downloadURL: Observable<string>;
  public itemsCollection: AngularFirestoreCollection<Reparto>;
  public repartos: Observable<Reparto[]>;
  public usuarioLogueado: Usuario | null = null;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public auth: AuthService) {
    this.itemsCollection = this.afs.collection(this.dbPath);

    this.repartos = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as Reparto;
        return data;
      });
    }));

    var usuarioActual = this.auth.obtenerUsuarioActual();

    // if(usuarioActual?.email != null){
    //   var datosUsuario: any = this.obtenerUsuarioPorEmail(usuarioActual?.email);
    //   console.log('DATO USER' + datosUsuario);
    //   this.usuarioLogueado = datosUsuario;
    // }
    // console.log('data' + this.usuarioLogueado?.horarioAtencion);

   }

  agregarReparto(reparto: Reparto){

    return this.itemsCollection.add(JSON.parse(JSON.stringify(reparto))).then(() => {
      Swal.fire({
        title: 'Alta de reparto exitoso'
      });
    }).catch((error) => {
      Swal.fire({
        title: error.code,
        text: error.message
      });
    });
  }

  traerTodos(){
    return this.repartos;
  }

  async obtenerDocumentoPizza(pizza: Pizza) {
    var value = await this.afs.collection(this.dbPath).ref.where('nombre', '==', pizza.nombre).get();
    if (value.docs[0].exists) {
      return value.docs[0].id;
    }
    else {
      return null;
    }
  }

  async obtenerUsuarioPorEmail(email: string) {
    return new Promise((resolve, reject) => {this.afs.collection(this.dbPath).get().subscribe((querySnapshot) => {
      let doc = querySnapshot.docs.find(doc => (doc.data() as Usuario).email == email);
      resolve(doc?.data());
      console.log(doc);
    })
    });
  }

  async borradoPizza(pizzaDoc: any){
    return pizzaDoc.update({
      estado: "borrado"
    }).then(() => {
      Swal.fire({
        title: 'Borrado exitoso'
      });
    });

  }

}
