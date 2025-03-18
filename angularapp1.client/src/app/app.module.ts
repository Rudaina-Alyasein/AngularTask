import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [

    AppComponent,
   
    HomeComponent,
    
    NavbarComponent,
    SignInComponent,
    CategoryComponent,
    ProductsComponent,
    SignUpComponent,
    SingleProductComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    RouterModule.forRoot(appRoutes) // إضافة التوجيه

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
