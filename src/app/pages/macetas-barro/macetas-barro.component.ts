import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-macetas-barro',
  templateUrl: './macetas-barro.component.html',
  styleUrls: ['./macetas-barro.component.css']
})
export class MacetasBarroComponent implements OnInit {

  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getMacetaB().subscribe(barro => {
        this.kit = barro
      });
      console.log(this.kit)
    }, 1000);
  }

}
