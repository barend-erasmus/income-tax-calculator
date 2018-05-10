import { IDeductionStrategy } from '../../interfaces/deduction-strategy';

export class UnemploymentInsuranceFund implements IDeductionStrategy {

    public calculate(value: number): number {
        return Math.min(value * 1 / 100, 148.72 * 12);
    }

}
