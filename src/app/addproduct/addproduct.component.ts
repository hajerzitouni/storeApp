import { ProduitService } from './../shared/produit.service';
import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit';

class ImageSnippet {
  pending = false;
  status = 'init';
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  selectedFile: ImageSnippet;
  produit: Produit;
    listProducts: Produit [];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produit = new Produit();
        this.produitService.getAllProduits().subscribe(listProducts => this.listProducts = listProducts);
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

        this.selectedFile = new ImageSnippet(event.target.result, file);
        console.log(this.selectedFile.src);

        this.selectedFile.pending =true ;  });

    reader.readAsDataURL(file);
}

add() {
  this.produit.image = this.selectedFile.src;
  this.produitService.postProduit(this.produit).subscribe(
      () => this.listProducts = [this.produit, ...this.listProducts]
  );
  console.log(this.produit);
}
onFileChanged(event:any) {
  const file = event.target.files[0]
}

}
