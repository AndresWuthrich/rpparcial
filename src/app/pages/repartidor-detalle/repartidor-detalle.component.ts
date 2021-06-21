import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  listaRepartidores!: Repartidor[];
  repartidorSeleccionado: Repartidor | null = null;
  
  constructor(private repartidorService: RepartidorService) {
      this.repartidorService.traerTodos().subscribe((repartidores: Repartidor[]) => {
      console.log(repartidores);
      this.listaRepartidores = repartidores;
    });

   }

  ngOnInit(): void {
  }

  obtenerRepartidorSeleccionado(repartidor: Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
  }

}
