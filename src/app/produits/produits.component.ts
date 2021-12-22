
import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';
//import {UserService} from '../shared/user.service';
//import {User} from '../model/user';
import {Router} from '@angular/router';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produit: Produit;
  listProducts: Produit[];

  constructor(private produitService: ProduitService , private route: Router ) {}

  ngOnInit(): void {
    this.produit = new Produit();
    this.produitService.getAllProduits().subscribe(listProducts => this.listProducts = listProducts);
   
  }
  delete(produit:any){
    this.produitService.deleteProduit(produit).subscribe(
        () => this.listProducts = this.listProducts.filter( f => f.id !== produit.id)
    );
}
save(){
  this.produitService.putFilm(this.produit).subscribe(
      produit =>  this.produit = this.produit,
      error1 => {
        console.error('error updating ');
      }
  );
  this.route.navigate(['/home']);
}
}

