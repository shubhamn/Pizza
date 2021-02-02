import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {PizzaService} from '../pizza.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

register:FormGroup
msg='';

  constructor(private fb:FormBuilder,private pizserv:PizzaService,private router:Router) { }

  ngOnInit() {

    this.register=this.fb.group({
      uid:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      mobno:['',Validators.required],
      pass:['',Validators.required],
      cpass:['',Validators.required] 

    })
    
  }


  submit(){
if(this.register.valid){
this.pizserv.postUser(this.register.value).subscribe((res:{status:Boolean,msg:any})=>{
console.log(this.register.value);
console.log(res);  
console.log("abcde")  
this.router.navigate(['/home']);
if(res.status==true)
  {this.msg=res.msg;
   alert(this.msg)
  }

  else{
      this.msg=res.msg;
  }


})


  }}




}
