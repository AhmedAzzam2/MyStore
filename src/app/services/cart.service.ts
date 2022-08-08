import { Injectable,OnInit,Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Input() ProductApi: any = [];
  constructor() { }
 
  addToCart(id: number,ProductApi: any,Product: any) {
    const input = document.getElementById('' + id) as HTMLInputElement | null;

    if (input != null) {

      let g = Product.find((o: any) => o.id == id)
      // add quantity object to g 
      console.log(g, "g");
      // alert(g.name+'Add to cart success');

      g.quantity = input.value; // add quantity to g[0]
      // ProductApi = ProductApi.filter((o: any) => o.id != id) ;
      // check if product is already in cart 
      let check = ProductApi.find((o: any) => o.id == id)
      if (check == undefined) {
      ProductApi.push(g);
      alert('Add to cart success');

      }
      else{
        console.log('Product is already in cart');
        
      }
      // ProductApi = ProductApi.filter((ele:any) => Object.keys(ele).length > 0)

    }

    // if is not in cart add to cart else update the quantity
    // localStorage.setItem("product", JSON.stringify(ProductApi));
    this.ProductApi = ProductApi;
    console.log(ProductApi, "ProductApi");


  }


}
