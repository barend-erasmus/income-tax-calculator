import { IDeductionStrategy } from './interfaces/deduction-strategy';

export class IncomeTaxCalculator {

    constructor(
        protected deductionStrategies: IDeductionStrategy[],
    ) {

    }

    public calculateAnnualIncomeAfterTax(annualIncome: number): number {
        const deductions: number[] = this.deductionStrategies
            .map((deductionStrategy: IDeductionStrategy) => deductionStrategy.calculate(annualIncome));

        const totalDeductions: number = deductions.reduce((a: number, b: number) => a + b);

        const result: number = annualIncome - totalDeductions;

        return result;
    }

}
