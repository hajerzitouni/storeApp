import {ProduitService} from '../shared/produit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from '../shared/carts.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  carts: any;
  products: any;
  singleprod: any;
  newprod: any;

  constructor(private productsService: ProduitService,
    private cartsService: CartsService,
    private route: ActivatedRoute) { 

    
  }

  ngOnInit(): void {
    this.cartsService.getAllCarts().subscribe(response => this.carts = response)
  }

}
