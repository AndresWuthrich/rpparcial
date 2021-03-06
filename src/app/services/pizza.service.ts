import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Pizza } from '../clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private filePath: any;
  private dbPath = '/pizzas';
  // private downloadURL: Observable<string>;
  public itemsCollection: AngularFirestoreCollection<Pizza>;
  public pizzas: Observable<Pizza[]>;
  public usuarioLogueado: Usuario | null = null;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public auth: AuthService) {
    this.itemsCollection = this.afs.collection(this.dbPath);

    this.pizzas = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as Pizza;
        return data;
      });
    }));

    var usuarioActual = this.auth.obtenerUsuarioActual();
   }

  agregarPizza(pizza: Pizza){

    return this.itemsCollection.add(JSON.parse(JSON.stringify(pizza))).then(() => {
      Swal.fire({
        title: 'Alta de pizza exitosa'
      });
    }).catch((error) => {
      Swal.fire({
        title: error.code,
        text: error.message
      });
    });
  }

  traerTodas(){
    return this.pizzas;
  }

  async obtenerDocumentoPizza(pizza: Pizza) {
    var value = await this.afs.collection(this.dbPath).ref.where('nombre', '==', pizza.nombre).get();
    console.log("value", value);
    if (value.docs[0].exists) {
      return value.docs[0].id;
    }
    else {
      return null;
    }
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
