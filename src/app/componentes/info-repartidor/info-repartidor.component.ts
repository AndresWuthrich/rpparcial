import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-info-repartidor',
  templateUrl: './info-repartidor.component.html',
  styleUrls: ['./info-repartidor.component.css']
})
export class InfoRepartidorComponent implements OnInit {

  @Input() repartidorElegido: Repartidor | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
