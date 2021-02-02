import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {PizzaService} from '../pizza.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform:FormGroup;
msg='';

  constructor(private fb:FormBuilder,private pizserv:PizzaService,private router:Router) { }

  ngOnInit() {
    this.loginform=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }


  setuniqueid(){

    this.pizserv.fetchuniqueid().subscribe((res:any)=>{
      console.log(res)
      this.pizserv.setid(res);
    })


  }



  submit(){
    if(this.loginform.valid){
      console.log(this.loginform.value.name)
this.pizserv.valiadateUser(this.loginform.value).subscribe((res:{status:Boolean,msg:any})=>{
console.log(res.status)  

  
  if(res.status)
 { // {this.msg=res.msg
    // alert(this.msg)
    alert(res.msg)
    this.pizserv.setid(this.loginform.value.name)
    this.router.navigate(['/home',this.loginform.value.name]);
  }



})


  }}




}
