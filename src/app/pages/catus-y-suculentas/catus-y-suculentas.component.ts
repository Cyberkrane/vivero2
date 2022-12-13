import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-catus-y-suculentas',
  templateUrl: './catus-y-suculentas.component.html',
  styleUrls: ['./catus-y-suculentas.component.css']
})
export class CatusYSuculentasComponent implements OnInit {

  kit: Producto[] = [];

  constructor(
    private productosService: ProductosService,
  ) { }

  ngOnInit(): void {
    console.log('Mostrando spinner......')
    setTimeout(() => {
      this.productosService.getCactus().subscribe(cactus => {
        this.kit = cactus
      });
      console.log(this.kit)
    }, 2000);
  }

}
