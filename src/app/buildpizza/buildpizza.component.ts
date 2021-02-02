import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';



@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})


export class BuildpizzaComponent implements OnInit {
  ingredientlist:any
  checkvalue:any
  totprice:any
  selectlist:any
  cartitem:any;

  constructor(private pizser:PizzaService) {
    this.totprice=0
    this.selectlist=[]
    this.cartitem={uid:this.pizser.retid(),name:'',image:'',price:0}
   }

  ngOnInit() {
  this.getPizza()
  console.log(this.cartitem)
  }

  checkhvalue(name:any,even){
    console.log(name)
    if(even.target.checked)
    {this.totprice=this.totprice+name.price
    this.selectlist.push(name)
  console.log(this.selectlist)
  }
    else
    {this.totprice=this.totprice-name.price
      this.selectlist.pop(name)
      console.log(this.selectlist)
    }
  
  }



  submitcart(){
    // this.selectlist.foEach((ab)=>{
    //   console.log(ab)
    // })
    
    for(var i=0;i<this.selectlist.length;i++){
          this.cartitem.name=this.selectlist[i].tname
          this.cartitem.image=this.selectlist[i].image
          this.cartitem.price=this.selectlist[i].price
          this.pizser.postcartdata(this.cartitem).subscribe((res:{status:boolean,msg:string})=>{
            console.log(res.msg)
          
          })
          

    }


  }

  getPizza(){
    this.pizser.getingredients().subscribe((res:{status:boolean,msg:string,response:[]})=>{
    console.log(res.response);
    this.ingredientlist=res.response;
    console.log(this.ingredientlist);
    
    })

    
    }
  
 



}
