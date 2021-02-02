import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzafront';
  hoverIndex:number = -1;
        index:number=1;

  onHover(i:number){
    this.hoverIndex = i;
    console.log(this.hoverIndex);
   }

}
