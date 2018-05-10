import { Component } from '@angular/core';
import { IncomeTaxCalculatorBuilder } from './builders/income-tax-calculator-builder';
import { IncomeTaxCalculator } from './income-tax-calculator';
import { IncomeTaxCalculatorType } from './enums/income-tax-calculator-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public annualIncome: number = null;

  public annualIncomeAfterTax: number = null;

  public country: string = null;

  public messages: string[] = null;

  public monthlyIncomeAfterTax: number = null;

  constructor() {
    this.messages = [];
  }

  public onClickCalculate(): void {
    this.messages = [];

    let incomeTaxCalculatorType: IncomeTaxCalculatorType = null;

    switch (this.country) {
      case 'ZA':
        incomeTaxCalculatorType = IncomeTaxCalculatorType.SouthAfrican;
        break;
      default:
        this.messages.push('Please select your country');
        return;
    }

    if (!this.annualIncome) {
      this.messages.push('Please enter your annual income');
      return;
    }

    const incomeTaxCalculatorBuilder: IncomeTaxCalculatorBuilder = new IncomeTaxCalculatorBuilder();

    const incomeTaxCalculator: IncomeTaxCalculator = incomeTaxCalculatorBuilder.build(incomeTaxCalculatorType);

    this.annualIncomeAfterTax = incomeTaxCalculator.calculateAnnualIncomeAfterTax(this.annualIncome);

    this.monthlyIncomeAfterTax = this.annualIncomeAfterTax / 12;
  }

}
