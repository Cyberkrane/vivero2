import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
  }

}
