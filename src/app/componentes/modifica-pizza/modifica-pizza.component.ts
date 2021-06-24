import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-modifica-pizza',
  templateUrl: './modifica-pizza.component.html',
  styleUrls: ['./modifica-pizza.component.css']
})
export class ModificaPizzaComponent implements OnInit {

  @Input() pizzaElegida: Pizza | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
