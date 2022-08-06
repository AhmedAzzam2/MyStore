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
  @Input() ProductApi: any[] = [];
  @Input() quantity : number = 1;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe(data => {
      this.Product = data;
    });

    console.log(this.Product);

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
    const input = document.getElementById(''+id) as HTMLInputElement | null;

    if (input != null) { 
      this.Product[id].quantity = parseInt(input.value, 10);
    }
    console.log(this.Product[id]);
    
    this.ProductApi.push(this.Product[id]); // ERROR TypeError: Cannot read properties of undefined (reading 'push')/
    console.log(this.ProductApi);
    

    localStorage.setItem('product', JSON.stringify(this.ProductApi));
  }


}

