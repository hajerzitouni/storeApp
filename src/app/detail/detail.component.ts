import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';
import {ProduitService} from '../shared/produit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  produit: Produit;
  listProducts: Produit[];

  constructor(private service: ProduitService , private Service: ActivatedRoute) { }
  ngOnInit(): void {
    this.produit = new Produit();
    this.service.getFilmById(this.Service.snapshot.params.id).subscribe( produit =>  this.produit = produit);
  }
}
