import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  // Product: any[];
  Product: any[] | undefined;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe(data => {
      this.Product = data;
    });

    
  }

  
}
