import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  ingredientsurl="http://localhost:3005/ingredients";
  pizzasurl="http://localhost:3005/pizza";
  carturl="http://localhost:3005/cart";
  cartdataurl="http://localhost:3005/cartdata/";
  validateurl="http://localhost:3005/user";
  registerurl="http://localhost:3005/addUser"
  uniqueurl="http://localhost:3005/id"
  constructor(private httpClient:HttpClient) { }
  id:'';
  

  fetchuniqueid(){
    return this.httpClient.get(this.uniqueurl);

  }

  getingredients(){
  
    return this.httpClient.get(this.ingredientsurl);
  }

  getpizzadata(){

    return this.httpClient.get(this.pizzasurl);
  }


  getcartdata(){

    return this.httpClient.get(this.cartdataurl+this.id);
  }

  postcartdata(product){
    return this.httpClient.post(this.carturl,product);
  }



  valiadateUser(data){
     
    return this.httpClient.post(this.validateurl,data);

  }

postUser(value){

  return this.httpClient.post(this.registerurl,value);


}


setid(val){

  this.id=val
}

retid(){
  return this.id;
}


}
