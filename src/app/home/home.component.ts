import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  billValue: number = 0;
  tipValue: number = 1;
  peopleValue: number = 0;
  amount: number = 0;
  total: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  onBill(event: any) {
    this.billValue = event.target.value;
    if (this.billValue) {
      console.log(this.billValue)
    }
  }

  onTip(value :any) {
    this.tipValue = value;
  }

  onCustomTip(event: any) {
    this.tipValue = event.target.value;
    if (this.tipValue) {
      console.log(this.tipValue)
    }
  }

  onPeople(event: any) {
    this.peopleValue = event.target.value;
    if (this.peopleValue) {
      console.log(this.peopleValue)
    }
  }

}
