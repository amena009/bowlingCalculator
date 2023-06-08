import { Action } from '@ngrx/store';
import { CustomErrors } from '../error.model';
import { Frame } from './calculator.model';

export enum CalculatorActionTypes {
  RESET_CALCULATOR_DIALOG_DATA = '[Reset-calculator-Details] Reset Calculator Dialog Data',

  CALCULATOR_DETAILS = '[Load-Calculator-Details] Load Calculator Details',
  CALCULATOR_DETAILS_SUCCESS = '[Load-Calculator-Details] Load Calculator Details Success',
  CALCULATOR_DETAILS_FAILURE = '[Load-Calculator-Details] Load Calculator Details Failure',
}

export class ResetCalculatorDialog implements Action {
  readonly type = CalculatorActionTypes.RESET_CALCULATOR_DIALOG_DATA;
}

export class CalculatorDetails implements Action {
  readonly type = CalculatorActionTypes.CALCULATOR_DETAILS;
  constructor(public payload: Frame[]) { }
}


export class CalculatorDetailsSuccess implements Action {
  readonly type = CalculatorActionTypes.CALCULATOR_DETAILS_SUCCESS;
  constructor(public payload: Frame[]) { }
}

export class CalculatorDetailsFailure implements Action {
  readonly type = CalculatorActionTypes.CALCULATOR_DETAILS_FAILURE;
  constructor(public payload: CustomErrors) { }
}

export type CalculatorActions = 
ResetCalculatorDialog | 
CalculatorDetails |
CalculatorDetailsSuccess | 
CalculatorDetailsFailure
