import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';



@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit {
pizzalist:any;
cartitem:any;
  constructor(private pizser:PizzaService) {
    this.cartitem={uid:this.pizser.retid(),name:'',image:'',price:0}
   }

  ngOnInit() {

    console.log(this.cartitem)
    this.getPizza()
    
  }

  getPizza(){
    
    this.pizser.getpizzadata().subscribe((res:{status:boolean,msg:string,response:[]})=>{
    console.log(res.response);
    this.pizzalist=res.response;
    })
    }

postpizza(even){
  console.log(even.image)
 this.cartitem.name=even.name
 this.cartitem.image=even.image
 this.cartitem.price=even.price
this.pizser.postcartdata(this.cartitem).subscribe((res:{status:boolean,msg:string})=>{
  console.log(res.msg)
})

}


}

