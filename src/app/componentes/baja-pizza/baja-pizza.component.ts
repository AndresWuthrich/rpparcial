import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.css']
})
export class BajaPizzaComponent implements OnInit {

  private dbPath = '/pizzas';

  @Input() pizzaElegida: Pizza | null = null;

  constructor(private afs: AngularFirestore, private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }
  
  async borrarPizza(pizza: Pizza){
    var documento: any = this.pizzaService.obtenerDocumentoPizza(pizza);
console.log(documento);
    var pizzaDoc = this.afs.collection(this.dbPath).doc(documento);
    console.log(pizzaDoc);

    // return pizzaDoc.update({
    //   estado: "borrado"
    // }).then(() => {
    //   Swal.fire({
    //     title: 'Borrado exitoso'
    //   });
    // });

    this.pizzaService.borradoPizza(pizzaDoc);

  }

}
