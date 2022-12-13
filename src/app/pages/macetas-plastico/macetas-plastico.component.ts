import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-macetas-plastico',
  templateUrl: './macetas-plastico.component.html',
  styleUrls: ['./macetas-plastico.component.css']
})
export class MacetasPlasticoComponent implements OnInit {

  
  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getMacetaP().subscribe(plastico => {
        this.kit = plastico
      });
      console.log(this.kit)
    }, 1500);
  }

}
