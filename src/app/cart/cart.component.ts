import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  projucts: any ;

  constructor() { }

  ngOnInit(): void {
    this.projucts = JSON.parse(localStorage.getItem("product") || '{}');
    // type 'object'. NgFor only supports binding to Iterables, such as Arrays
    this.projucts = Object.values(this.projucts);

    console.log(this.projucts);

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
// if 0 then delete from projucts
    if (input != null && input.value > '1') {  
      const value = parseInt(input.value, 10);
      input.value = (value - 1).toString();
    }
  }
  
  
  

}
