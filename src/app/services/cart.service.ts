import { Injectable,OnInit,Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
 
  addToCart(id: number,ProductApi: any,Product: any) {
    const input = document.getElementById('' + id) as HTMLInputElement | null;

    if (input != null) {

      alert('Add to cart success');
      let g = Product.find((o: any) => o.id == id)
      // add quantity object to g 
      console.log(g, "g");

      g.quantity = input.value; // add quantity to g[0]
      ProductApi = ProductApi.filter((o: any) => o.id != id) ;
      ProductApi.push(g);
      ProductApi = ProductApi.filter((ele:any) => Object.keys(ele).length > 0)


    }
    console.log(Product[id]);

    // if is not in cart add to cart else update the quantity
    localStorage.setItem("product", JSON.stringify(ProductApi));
    console.log(ProductApi);


  }


}
