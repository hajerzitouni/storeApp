import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitsComponent } from './produits/produits.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PanierComponent } from './panier/panier.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table' ;
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserCartComponent } from './user-cart/user-cart.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NavbarComponent,
    LoginComponent,
    UsersComponent,
    PanierComponent,
    CategoriesComponent,
    AddproductComponent,
    UpdateproductComponent,
    UserCartComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule ,
    MatCardModule ,
    MatExpansionModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
