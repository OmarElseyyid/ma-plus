import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  constructor() { }


  title = "Kategori Listesi"
  categories: Category[] = [
    { id: 1, name: 'Tüm Telefonlar' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Apple' },
    { id: 4, name: 'Huawei' },
    { id: 5, name: 'LG' },
    { id: 6, name: 'Xiaomi' },
    { id: 7, name: 'Oppo' },
    { id: 8, name: 'Diğer Ürünler' }


    
  ]


  ngOnInit(): void {
  }

}
