import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() projucts: any | undefined;
  @Input() ProductApi: any = JSON.parse(localStorage.getItem("product") || '{}');


  constructor() { }

  ngOnInit(): void {
    this.projucts = JSON.parse(localStorage.getItem("product") || '{}');
    // type 'object'. NgFor only supports binding to Iterables, such as Arrays
    this.projucts = Object.values(this.projucts);

    console.log(this.projucts, "projucts");

  }


  // function up number value by id and return the new value
  up(id: string) {
    // 👇️ const input: HTMLInputElement | null
    const input = document.getElementById(id) as HTMLInputElement | null;
    const total = document.getElementById('total') as HTMLInputElement | null;
    console.log(id);

    if (input != null) {
      const value = parseInt(input.value, 10);
      input.value = (value + 1).toString();



      this.projucts.forEach((o: { id: string ,quantity:string }) => {
        if (o.id === id) {
          o.quantity = (value + 1).toString();
          console.log(o);
        }
      });


    }
    if (total != null) {

      total.innerHTML = this.getTotal().toString();
    }
  }

  down(id: string) {
    // 👇️ const input: HTMLInputElement | null
    const input = document.getElementById(id) as HTMLInputElement | null;
    const total = document.getElementById('total') as HTMLInputElement | null;
    console.log(id);

    if (input != null) {
      const value = parseInt(input.value, 10);
      input.value = (value - 1).toString();


      // remove item from projucts array 
      if (value == 1) {
        this.projucts = this.projucts.filter((o:any) => o.id != id);
        localStorage.setItem("product", JSON.stringify(this.projucts));
      }

      this.projucts.forEach((o: { id: string ,quantity:string }) => {
        if (o.id === id) {
          o.quantity = (value - 1).toString();
          console.log(o);
          
        }
      });
      


    }
    if (total != null) {

      total.innerHTML = this.getTotal().toString();
    }
  }

  // loop quantity in projucts and get the total
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.projucts.length; i++) {
      total += this.projucts[i].quantity * this.projucts[i].price;
    }
    return total;
  }



  nameChanged(arg: any) {
    console.log("good " + arg);
  }


}
