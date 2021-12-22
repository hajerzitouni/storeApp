import { ProduitService } from './../shared/produit.service';
import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  produit: Produit;
  listProducts: Produit [];
  constructor(private produitService: ProduitService,private service: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.produit = new Produit();
        this.produitService.getAllProduits().subscribe(listProducts => this.listProducts = listProducts);
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
