import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private pizzaService: PizzaService, private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  async modificarPizza(pizza: Pizza){
    var documento: any = this.pizzaService.obtenerDocumentoPizza(pizza);
console.log(documento);
    var pizzaDoc = this.afs.collection(this.dbPath).doc(documento);
    console.log(pizzaDoc);

    return pizzaDoc.update({
      estado: "borrado"
    }).then(() => {
      Swal.fire({
        title: 'Borrado exitoso'
      });
    });

  }
}
