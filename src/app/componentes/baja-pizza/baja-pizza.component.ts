import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.css']
})
export class BajaPizzaComponent implements OnInit {

  @Input() pizzaElegida: Pizza | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
