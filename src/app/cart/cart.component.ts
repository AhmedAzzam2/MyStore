import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  projucts: any | undefined;

  constructor() { }

  ngOnInit(): void {
    this.projucts = JSON.parse(localStorage.getItem("product") || '{}');

  }

}
