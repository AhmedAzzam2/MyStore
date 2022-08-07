import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  // {
  //   "id": 4,
  //   "name": "Glasses",
  //   "price": 129.99,
  //   "url": "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   "description": "Now you can see!"
  // },


  @Input() Product: any | undefined;
  @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '{}');
  @Output() addToCartEvent = new EventEmitter();

  @Input() x: number = 1;
  myid: number | undefined;
  constructor(
    private route: ActivatedRoute,
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

      alert('Add to cart success');
      let g = this.Product;
      // add quantity object to g 
      console.log(g, "g");

      g.quantity = input.value; // add quantity to g[0]
      this.ProductApi = this.ProductApi.filter((o: any) => o.id != id);
      this.ProductApi.push(g);
      this.ProductApi = this.ProductApi.filter((ele:any) => Object.keys(ele).length > 0)



    }
    console.log(this.Product[id]);

    // if is not in cart add to cart else update the quantity
    localStorage.setItem("product", JSON.stringify(this.ProductApi));
    console.log(this.ProductApi);


  }


}
