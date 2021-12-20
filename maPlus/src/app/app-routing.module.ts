import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products', component: ProductComponent},
  {path:'product-add', component: AddProductComponent, canActivate:[LoginGuard]},
  {path:'products/category/:CatID', component: ProductComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'app-sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
