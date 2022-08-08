import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  // Product: any[];
  @Input() Product: any | undefined;
  // @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '[{}]');
  @Input() ProductApi: any = this.CartService.ProductApi;

  @Input() quantity: number = 1;
  constructor(private ProductService: ProductService,private CartService:CartService) { }

  ngOnInit(): void {
    type Product = {
      id: number;
      name?: string;
      price?: number;
      quantity?: number;
    };

    this.ProductService.getProduct().subscribe(data => {
      this.Product = data;
    });
console.log(this.CartService.ProductApi, "Product");


  }


  // function up number value by id and return the new value
  up(id: string) {
    // 👇️ const input: HTMLInputElement | null
    const input = document.getElementById(id) as HTMLInputElement | null;


    if (input != null) {
      const value = parseInt(input.value, 10);
      input.value = (value + 1).toString();
    }
  }

  down(id: string) {
    const input = document.getElementById(id) as HTMLInputElement | null;

    if (input != null && input.value > '1') {
      const value = parseInt(input.value, 10);
      input.value = (value - 1).toString();
    }
  }
 
  addToCart(id: number) {
    this.CartService.addToCart(id,this.ProductApi,this.Product);
  }



}

