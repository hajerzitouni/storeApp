import {ProduitService} from '../shared/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from '../shared/carts.service';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {



  carts: any;
  products: any;
  singleprod: any;
  newprod: any;

  constructor(
    private productsService: ProduitService,
    private cartsService: CartsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Id dai parametri/link di user.component tramite ActivetedRoute
    this.route.params.subscribe(response => this.cartsService.getCart(response.id)
      .subscribe(response => {
        this.carts = response
        this.products = this.carts.products
        console.log(this.products)
        //ciclato array della cart per prendere i productId degli oggetti 
        for (let p of this.products) {
          console.log(p.productId)
          this.productsService.getSingleProduct(p.productId).
            subscribe(response => {
              //costruzione dell'oggetto singleprod
              console.log('singleprod', response)
              this.singleprod = response;
              //definizione dei nuovi attributi di products 
              p.img = this.singleprod.image;
              p.titolo = this.singleprod.title;
              p.descrizione = this.singleprod.description;
              console.log('newprod', this.products)
              this.newprod = response;
            })
        }
      })
    );

  }



}
