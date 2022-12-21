import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-macetas-deco',
  templateUrl: './macetas-deco.component.html',
  styleUrls: ['./macetas-deco.component.css']
})
export class MacetasDecoComponent implements OnInit {

  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getMacetaD().subscribe(deco => {
        this.kit = deco
      });
      console.log(this.kit)
    }, 1500);
  }

}
