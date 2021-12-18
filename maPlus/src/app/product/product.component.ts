import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  title = "Ürün Listesi"
  filterText: undefined;
  products: Product[] = [];

  constructor(private myAlertifyService:AlertifyService, private productService:ProductService) { }


  ngOnInit(): void {
      this.productService.getProducts().subscribe(data=>{
        this.products = data;
      })
  }

  addToChart(p:Product)
  {
    this.myAlertifyService.success(p.name+" sepete eklendi")
  }

}
