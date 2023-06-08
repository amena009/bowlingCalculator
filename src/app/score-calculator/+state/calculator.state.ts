import { CustomErrors } from "../error.model";
import { Frame } from "./calculator.model";


export interface CalculatorState {
  error: CustomErrors,
  calculatorResponse: Frame[];
}
