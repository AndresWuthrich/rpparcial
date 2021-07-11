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
    
  }
}
