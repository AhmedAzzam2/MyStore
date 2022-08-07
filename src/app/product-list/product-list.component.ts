import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  // Product: any[];
  @Input() Product: any | undefined;
  @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '{}');

  @Input() quantity: number = 1;
  constructor(private ProductService: ProductService) { }

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
    const input = document.getElementById('' + id) as HTMLInputElement | null;

    if (input != null) {

      alert('Add to cart success');

      if (!this.ProductApi[id]) {
        this.ProductApi[id] = this.Product[id];
        this.ProductApi[id].quantity = parseInt(input.value, 10);
      }
      else {
        this.ProductApi[id].quantity += parseInt(input.value, 10);
      }


    }
    console.log(this.Product[id]);

    // if is not in cart add to cart else update the quantity
    localStorage.setItem("product", JSON.stringify(this.ProductApi));
    console.log(this.ProductApi);


  }


}

let ob = [
  { id: 1, name: 'product 1', price: 100 },
  { id: 2, name: 'product 2', price: 200 }, 
  { id: 3, name: 'product 3', price: 300 },
]

let ob2 = ob.filter(({ id }) => id === 1)[0]; 