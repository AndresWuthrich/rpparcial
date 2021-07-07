import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica-pizza',
  templateUrl: './modifica-pizza.component.html',
  styleUrls: ['./modifica-pizza.component.css']
})
export class ModificaPizzaComponent implements OnInit {

  public dbPath: string = '/pizzas';
  @Input() pizzaElegida: Pizza | null = null;

  public formRegistro: FormGroup;
  public signup: boolean;

  public pizzaAlta: Pizza = new Pizza();

  constructor(private fb: FormBuilder, private pizzaService: PizzaService, private afs: AngularFirestore) {

    this.signup = false;

    this.formRegistro = this.fb.group({
      'nombre':['', Validators.required],
      'ingredientes':['', Validators.required],
      'precio':['', [Validators.required, Validators.min(1)]],
      'peso':['', [Validators.required, Validators.min(500), Validators.max(1000)]]
    });
   }

  ngOnInit(): void {
  }

  async modificarPizza(pizza: Pizza){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    this.signup = true;
    
    setTimeout(() => {
      this.signup = false;
    }, 3000);

    this.pizzaAlta.nombre = pizza.nombre;
    this.pizzaAlta.ingredientes = this.formRegistro.controls['ingredientes'].value;
    this.pizzaAlta.precio = this.formRegistro.controls['precio'].value;
    this.pizzaAlta.peso = this.formRegistro.controls['peso'].value;
    this.pizzaAlta.estado = "";

    var documento: any = await this.pizzaService.obtenerDocumentoPizza(pizza);
    console.log("DOC",documento);
    console.log("pizAlta",this.pizzaAlta);

    var pizzaDoc = this.afs.collection(this.dbPath).doc(documento);
    console.log("pizDoc",pizzaDoc);
    // return this.afs.collection(this.dbPath).doc(documento).update(this.pizzaAlta);

    return pizzaDoc.update({
      ingredientes: this.formRegistro.controls['ingredientes'].value,
      precio: this.formRegistro.controls['precio'].value,
      peso: this.formRegistro.controls['peso'].value
        // estado: "borrado"
    });//.then(() => {
    //   Swal.fire({
    //     title: 'Borrado exitoso'
    //   });
    // });

  }


  async registro(){
    console.log(this.formRegistro.getRawValue());

    const { email, password } = this.formRegistro.value;
    
    // this.signup = true;
    
    // setTimeout(() => {
    //   this.signup = false;
    // }, 3000);

    // this.auth.Registro(email, password).then(value => { 
    //   console.log(value?.user?.uid);

      // this.pizzaAlta.nombre = this.formRegistro.controls['nombre'].value;
      // this.pizzaAlta.ingredientes = this.formRegistro.controls['ingredientes'].value;
      // this.pizzaAlta.precio = this.formRegistro.controls['precio'].value;
      // this.pizzaAlta.peso = this.formRegistro.controls['peso'].value;
      // this.pizzaAlta.estado = "";
      // this.usuarioAlta.uid = this.auth.usuario.uid;
      // this.usuarioAlta.uid = value?.user?.uid;
 
      // if(this.perfil=='paciente'){
      //   this.usuarioAlta.imagenPerfil2 = this.formRegistro.controls['imagen2'].value;
      //   this.usuarioAlta.obraSocial = this.formRegistro.controls['obraSocial'].value;
      //   this.usuarioAlta.cuentaAprobada = true;
        
      //   console.log(this.imagenPerfil);
      //   console.log(this.imagenPerfil2);
      //   this.usuarioService.agregarPaciente(this.imagenPerfil, this.imagenPerfil2, this.usuarioAlta);
        // this.email = this.password = '';
  
      // } else {
        // this.usuarioAlta.especialidad = this.formRegistro.controls['especialidad'].value;
        // this.usuarioAlta.especialidad = this.listaEspecialidadesSeleccionadas;

        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Lunes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Martes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Miercoles', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Jueves', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Viernes', 8, 19));
        // this.listaDiasSeleccionadas.push(new DiasAtencion(true, 'Sabado', 8, 14));

        // this.usuarioAlta.horarioAtencion = this.listaDiasSeleccionadas;

        // console.log(this.imagenPerfil);
        // this.usuarioService.agregarEspecialista(this.imagenPerfil, this.usuarioAlta);
        // this.pizzaService.agregarPizza(this.pizzaAlta);
        // this.email = this.password = '';
      // }
      // this.router.navigate(['verificacion-email']);
      // this.router.navigate(['bienvenido']);
      // });
    // console.log(this.auth.usuario.uid);
  }

}
