import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [CategoryService,ProductService]
})
export class AddProductComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService
  ) { }

  productAddForm!: FormGroup;
  product:Product = new Product();
  categories:Category[] = [];

  ngOnInit(): void {

    this.creatProductAddForm();
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
    
  }

  creatProductAddForm(){
    this.productAddForm = this.formBuilder.group(
      {
        name:["", Validators.required],
        desc:["", Validators.required],
        imgUrl:["", Validators.required],
        price:["", Validators.required],
        categoryID:["", Validators.required],

      }
    )
  }

  add(){
    if (this.productAddForm.valid) {

      //this.product = Object.assign({}, this.productAddForm.value)
      this.product = this.productAddForm.value as Product

      this.productService.addProduct(this.product).subscribe(data=>{
        this.alertifyService.success(data.name + " başarıyla eklendi.")
      })

    }
    else{
      this.alertifyService.warning("Lütfen veriler tam giriniz.")
    }
  }

}
