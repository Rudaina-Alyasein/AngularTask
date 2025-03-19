import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { CategoryManagementComponent } from './Admin/category-management/category-management.component';
import { ProductManagementComponent } from './Admin/product-management/product-management.component';
import { ProductsPage1Component } from './products-page1/products-page1.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },

  { path: "CategoryPage", component: CategoryComponent },
  { path: "ProductsPage/:id", component: ProductsComponent },
  { path: "SinglePageProduct/:id", component: SingleProductComponent },
  { path: "Register", component: RegistrationComponent },
  { path: "addCategory", component: AddCategoryComponent },
  { path: "addProduct", component: AddProductComponent },
  {
    path: "Dashboard", component: DashboardComponent, children: [
      { path: "CategoryManagement", component: CategoryManagementComponent }
      , { path: "ProductManagement", component: ProductManagementComponent },
      {
        path: "ProductsPage1/:id", component:ProductsPage1Component

      }
    ]
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
