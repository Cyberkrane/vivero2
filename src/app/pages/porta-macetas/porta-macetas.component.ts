import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-porta-macetas',
  templateUrl: './porta-macetas.component.html',
  styleUrls: ['./porta-macetas.component.css']
})
export class PortaMacetasComponent implements OnInit {

  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {

    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getPorta().subscribe(porta => {
        this.kit = porta
      });
      console.log(this.kit)
    }, 2000);
  }

 
}
