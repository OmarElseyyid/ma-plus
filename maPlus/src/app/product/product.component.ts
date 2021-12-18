import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Ürün Listesi"
  filterText: undefined;
  products: Product[] = [

    {id:1,name:'iphone',price:3000,categoryID:1,desc:'new iphone',imgUrl:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
    {id:2,name:'samsung',price:2000,categoryID:2,desc:'new samsung',imgUrl:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'}

  ]

  constructor() { }


  ngOnInit(): void {
  }

  addToChart(p:Product)
  {
    alert("eklendi")
  }

}
