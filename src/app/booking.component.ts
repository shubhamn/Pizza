import { Component, OnInit } from '@angular/core';

export interface IBatch {
  name: string;
  month: string;
  time: string;
  slots: string;
  color: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  public batches: IBatch[] = [
    {name: 'Regular', month: 'September 1', time: '10:30 AM - 5:00 PM' , slots: '20/25', color: 'blue'  },
    {name: 'Weekend', month: 'September 10', time: '10:30 AM - 5:00 PM' , slots: '15/25', color: 'red'  },
    {name: 'Weekend', month: 'August 10', time: '12:30 AM - 8:00 PM' , slots: '21/25', color: 'red'  },
  ];


}