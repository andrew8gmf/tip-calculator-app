import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  billValue: any;
  customTipValue: any;
  peopleValue: any;
  
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
    console.log(value);
  }

  onCustomTip(event: any) {
    this.customTipValue = event.target.value;
    if (this.customTipValue) {
      console.log(this.customTipValue)
    }
  }

  onPeople(event: any) {
    this.peopleValue = event.target.value;
    if (this.peopleValue) {
      console.log(this.peopleValue)
    }
  }

}
