import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { AuthService } from './auth.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private filePath: any;
  private dbPath = '/usuarios';
  // private downloadURL: Observable<string>;
  public itemsCollection: AngularFirestoreCollection<Usuario>;
  public usuarios: Observable<Usuario[]>;
  img1: any;
  // img2: any;
  public usuarioLogueado: Usuario | null = null;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public auth: AuthService) {
    this.itemsCollection = this.afs.collection(this.dbPath);

    this.usuarios = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as unknown as Usuario;
        return data;
      });
    }));

    var usuarioActual = this.auth.obtenerUsuarioActual();
   }

  agregarUsuario(usuario: Usuario){
    console.log("serv", usuario);
    return this.itemsCollection.add(JSON.parse(JSON.stringify(usuario)));
  }

  agregarEspecialista(imagen: any, usuario: Usuario){
  }

  async  agregarPaciente(imagen: any, imagen2: any, usuario: Usuario){
  }

  traerProfesores(){
    return this.usuarios.pipe(map(value => 
      { return value.filter(user => 
       { return user.perfil == "profesor"; });
    }));
  }

  traerAlumnos(){
    return this.usuarios.pipe(map(value => 
      { return value.filter(user => 
       { return user.perfil == "alumno"; });
    }));
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
      console.log("usuarioservice ",doc);
    })
    });
  }
}
