import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {


  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.productosService.getPlantas().subscribe(planta => {
        this.kit = planta
      });
    }, 500);

  }

}
