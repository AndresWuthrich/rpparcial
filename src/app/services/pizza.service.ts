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

    // if(usuarioActual?.email != null){
    //   var datosUsuario: any = this.obtenerUsuarioPorEmail(usuarioActual?.email);
    //   console.log('DATO USER' + datosUsuario);
    //   this.usuarioLogueado = datosUsuario;
    // }
    // console.log('data' + this.usuarioLogueado?.horarioAtencion);

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


  traerAlumnos(){
    // return this.usuarios.pipe(map(value => 
    //   { return value.filter(user => 
    //    { return user.perfil == "alumno"; });
    // }));
  }

  traerTodas(){
    return this.pizzas;
  }

  async obtenerDocumentoUsuario(user: Usuario) {
    var value = await this.afs.collection(this.dbPath).ref.where('email', '==', user.email).get();
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
}
