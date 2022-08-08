import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sip-calculator',
  templateUrl: './sip-calculator.component.html',
  styleUrls: ['./sip-calculator.component.css']
})
export class SipCalculatorComponent implements OnInit {
  loanAmt: number = 500;
  tenure: number = 1;
  interestRate: number = 8;
  investedAmount!: any;
  returnAmount!: any;
  constructor() { }

  ngOnInit(): void {
    let pIntRate: number = (this.interestRate / 12) / 100;
    this.investedAmount = (this.loanAmt * this.tenure * 12).toLocaleString("hi-IN", { currency: "INR", maximumFractionDigits: 0 });
    this.returnAmount = this.loanAmt * ((Math.pow(1 + pIntRate, this.tenure * 12) - 1) / pIntRate) * (1 + pIntRate);
    this.returnAmount = Math.floor(Number(this.returnAmount)).toLocaleString("hi-IN", { currency: "INR", maximumFractionDigits: 0 });
  }
  calculateIntrest() {
    let pIntRate: number = (this.interestRate / 12) / 100;
    this.investedAmount = (this.loanAmt * this.tenure * 12).toLocaleString("hi-IN", { currency: "INR", maximumFractionDigits: 0 });
    this.returnAmount = this.loanAmt * ((Math.pow(1 + pIntRate, this.tenure * 12) - 1) / pIntRate) * (1 + pIntRate);
    this.returnAmount = Math.floor(Number(this.returnAmount)).toLocaleString("hi-IN", { currency: "INR", maximumFractionDigits: 0 });

  }

}
