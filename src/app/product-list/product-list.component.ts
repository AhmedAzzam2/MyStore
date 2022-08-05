import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  // users: any[];
  users: any[] | undefined;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
