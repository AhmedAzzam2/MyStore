import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  Product: any[] | undefined;
  constructor(private ProductService: ProductService) { }


  ngOnInit(): void {
    // firt get the product id from the route
    // then get the product detail from the service
    // then assign the product detail to the product property
    this.ProductService.getProduct().subscribe(data => {
      this.Product = data;
    }
    );
  }

}
