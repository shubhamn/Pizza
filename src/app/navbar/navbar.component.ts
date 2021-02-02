import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartlist:any;
  id:any;
 totalcost;
  
  constructor(private pizser:PizzaService,private route:ActivatedRoute) { 
    this.totalcost=0
  }

  ngOnInit() {

     

  }


  getcart(){
     this.totalcost=0
    
    this.id=this.pizser.retid()
    console.log("nav comp is"+this.id);

    this.pizser.getcartdata().subscribe((res:{status:boolean,msg:string,response:[{price:number}]})=>{
      console.log(res.response);
      this.cartlist=res.response
       length=(res.response.length-1)

       for(var i=0;i<=length;i++)
         this.totalcost=+(this.totalcost)+(+(res.response[i].price));

      

console.log(this.totalcost)

      })

  }



  hoverIndex:number = -1;
        index:number=1;

  onHover(i:number){
    this.hoverIndex = i;
    console.log(this.hoverIndex);
   }

}
