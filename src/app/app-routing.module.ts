import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from '../app/produits/produits.component';
import {UsersComponent} from '../app/users/users.component';
import {LoginComponent} from '../app/login/login.component';
import {PanierComponent} from '../app/panier/panier.component';
import {AddproductComponent} from '../app/addproduct/addproduct.component';
import {UpdateproductComponent} from '../app/updateproduct/updateproduct.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {DetailComponent} from './detail/detail.component';




const routes: Routes = [
  {path: 'home', component:  ProduitsComponent},
  {path: 'users', component:UsersComponent  },
  {path: 'login', component:LoginComponent  },
  {path: 'panier', component:PanierComponent  },
  {path: 'addprod', component:AddproductComponent  },
  {path: 'updateprod/:id', component:UpdateproductComponent  },
  {path: 'users/:id/cart', component: UserCartComponent},
  {path: 'Detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
