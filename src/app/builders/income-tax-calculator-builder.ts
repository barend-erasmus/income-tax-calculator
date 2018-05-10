import { IncomeTaxCalculator } from '../income-tax-calculator';
import { IncomeTaxCalculatorType } from '../enums/income-tax-calculator-type';
import { IncomeTaxDeductionStrategy } from '../deduction-strategies/income-tax';
import { UnemploymentInsuranceFund } from '../deduction-strategies/south-african/unemployment-insurance-fund';

export class IncomeTaxCalculatorBuilder {

    public build(type: IncomeTaxCalculatorType): IncomeTaxCalculator {
        switch (type) {
            case IncomeTaxCalculatorType.SouthAfrican:
                return new IncomeTaxCalculator([
                    new IncomeTaxDeductionStrategy([
                        [0, 195850, 0, 18],
                        [195850, 305850, 35253, 26],
                        [305850, 423300, 63853, 31],
                        [423300, 555600, 100263, 36],
                        [555600, 708310, 147891, 39],
                        [708310, 1500000, 207448, 41],
                        [1500000, null, 532041, 45],
                    ]),
                    new UnemploymentInsuranceFund(),
                ]);
        }
    }

}
