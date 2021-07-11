import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Repartidor } from '../clases/repartidor';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  private filePath: any;
  private dbPath = '/repartidores';
  // private downloadURL: Observable<string>;
  public itemsCollection: AngularFirestoreCollection<Repartidor>;
  public usuarios: Observable<Repartidor[]>;
  img1: any;
  img2: any;
  public usuarioLogueado: Usuario | null = null;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public auth: AuthService) {
    this.itemsCollection = this.afs.collection(this.dbPath);

    this.usuarios = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as Repartidor;
        return data;
      });
    }));

    var usuarioActual = this.auth.obtenerUsuarioActual();
   }

  agregarRepartidor(usuario: Repartidor){

    return this.itemsCollection.add(JSON.parse(JSON.stringify(usuario))).then(() => {
      Swal.fire({
        title: 'Alta de repartidor exitosa'
      });
    }).catch((error) => {
      Swal.fire({
        title: error.code,
        text: error.message
      });
    });
  }

  agregarEspecialista(imagen: any, usuario: Usuario){
  }

  async  agregarPaciente(imagen: any, imagen2: any, usuario: Usuario){
  }

  traerAlumnos(){
  }

  traerTodos(){
    return this.usuarios;
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
