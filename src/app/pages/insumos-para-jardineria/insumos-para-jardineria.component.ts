import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-insumos-para-jardineria',
  templateUrl: './insumos-para-jardineria.component.html',
  styleUrls: ['./insumos-para-jardineria.component.css']
})
export class InsumosParaJardineriaComponent implements OnInit {

  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getInsumos().subscribe(insumos => {
        this.kit = insumos
      });
      console.log(this.kit)
    }, 2000);
  }

}
