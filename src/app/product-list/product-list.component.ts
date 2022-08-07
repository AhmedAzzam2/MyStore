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
  @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '[{}]');

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
      let g = this.Product.find((o: any) => o.id == id)
      // add quantity object to g 
      console.log(g, "g");

      g.quantity = input.value; // add quantity to g[0]
      this.ProductApi = this.ProductApi.filter((o: any) => o.id != id) ;
      this.ProductApi.push(g);
      this.ProductApi = this.ProductApi.filter((ele:any) => Object.keys(ele).length > 0)


    }
    console.log(this.Product[id]);

    // if is not in cart add to cart else update the quantity
    localStorage.setItem("product", JSON.stringify(this.ProductApi));
    console.log(this.ProductApi);


  }


}

