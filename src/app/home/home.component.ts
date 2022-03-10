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
    this.calculator();
  }

  onTip(value :any) {
    this.tipValue = value;
    this.calculator();
  }

  onCustomTip(event: any) {
    this.tipValue = event.target.value;
    this.calculator();
  }

  onPeople(event: any) {
    this.peopleValue = event.target.value;
    this.calculator();
  }

  calculator() {
    var percent = this.billValue * this.tipValue;
    this.amount = percent / this.peopleValue;
    if (!isFinite(this.amount)) {
      this.amount = 0;
    }
    return this.amount;
  }

}
