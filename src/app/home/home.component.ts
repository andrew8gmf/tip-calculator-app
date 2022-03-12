import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  billValue: number = 0;
  tipValue: number = 0;
  peopleValue: number = 1;
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
    this.tipValue = value * 0.01;
    this.calculator();
  }

  onCustomTip(event: any) {
    this.tipValue = event.target.value * 0.01;
    this.calculator();
  }

  onPeople(event: any) {
    this.peopleValue = event.target.value;
    this.calculator();
  }

  calculator() {
    this.amount = this.billValue * this.tipValue / this.peopleValue;
    if (!isFinite(this.amount)) {
      this.amount = 0;
    }

    this.total = this.billValue / this.peopleValue + this.amount;

    return this.amount, this.total;
  }

  reset() {
    this.billValue = 0;
    this.tipValue = 0;
    this.peopleValue = 1;
    this.amount = 0;
    this.total = 0;
  }

}
