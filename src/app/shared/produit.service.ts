
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Produit} from '../model/produit';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

// handling erros in service
getAllProduits(): Observable<Produit[]>{
  return this.http.get<Produit[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
  );
}
getSingleProduct(id: number) {
  return this.http.get<Produit[]>(this.url + '/' + id)
  
}
getFilmById(id:number): Observable<Produit>{
  return this.http.get<Produit>(this.url + '/' + id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
  );
}
postProduit(produit: Produit) {
  return this.http.post(this.url, produit);
}
putFilm(produit: Produit): Observable<Produit>{
  return this.http.put<Produit>(this.url + '/' + produit.id, produit).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
  );
}
deleteProduit(produit: Produit): Observable<Produit>{
  return this.http.delete<Produit>(this.url + '/' + produit.id).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
  );
}

}
