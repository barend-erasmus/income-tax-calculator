import { IDeductionStrategy } from '../interfaces/deduction-strategy';

export class IncomeTaxDeductionStrategy implements IDeductionStrategy {

    constructor(protected table: number[][]) {
    }

    public calculate(value: number): number {
        const tableRow: number[] = this.table.find((x: number[]) => value >= x[0] && (x[1] === null || value <= x[1]));

        const taxableAmount: number = value - tableRow[0];

        const totalTax: number = (taxableAmount * tableRow[3] / 100) + tableRow[2];

        return totalTax;
    }

}
