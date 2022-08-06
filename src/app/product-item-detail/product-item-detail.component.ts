import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  // get id from path link 
  // params.get('id'); 

  // Product: any[];
  @Input() Product: any | undefined;
  @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '{}');

  @Input() x: number = 1;
  myid: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.myid = Number(params.get('id'));
    })
    console.log(this.myid);


    this.ProductService.getProduct().subscribe(data => {
      // get product by id find the product by id
      this.Product = data.filter(({ id }) => id === this.myid)[0];
      console.log(this.Product);
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
