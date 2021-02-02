import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private pizserv:PizzaService) { }

  ngOnInit() {


console.log(this.pizserv.retid())

  }

}
