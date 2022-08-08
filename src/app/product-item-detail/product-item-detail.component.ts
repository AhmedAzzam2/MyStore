import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  @Input() Product: any | undefined;
  // @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '[{}]');
  @Input() ProductApi: any = this.CartService.ProductApi;
  @Output() addToCartEvent = new EventEmitter();

  @Input() x: number = 1;
  myid: number | undefined;
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
    private ProductService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.myid = Number(params.get('id'));
    })


    this.ProductService.getProduct().subscribe(data => {
      // get product by id find the product by id
      this.Product = data.find(({ id }) => id === this.myid);
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

      let g = this.Product;
      // add quantity object to g 
      console.log(g, "g");

      g.quantity = input.value; // add quantity to g[0]
      // this.ProductApi = this.ProductApi.filter((o: any) => o.id != id);
      //       // check if product is already in cart 
      let check = this.ProductApi.find((o: any) => o.id == id)
      if (check == undefined) {
      this.ProductApi.push(g);
      alert('Add to cart success');
      }
      else{
        console.log('Product is already in cart');
      }
      // this.ProductApi = this.ProductApi.filter((ele:any) => Object.keys(ele).length > 0)



    }
    console.log(this.Product[id]);

    // if is not in cart add to cart else update the quantity
    // localStorage.setItem("product", JSON.stringify(this.ProductApi));
    this.CartService.ProductApi = this.ProductApi;
    console.log(this.ProductApi);


  }


}
