import { CalculatorState } from './calculator.state';
import { CalculatorActionTypes, CalculatorActions } from './calculator.actions';
import { createFeatureSelector } from '@ngrx/store';

export const CALCULATOR_FEATURE_KEY = 'binGroup';

export const selectCalculatorState = createFeatureSelector<CalculatorState>(CALCULATOR_FEATURE_KEY);

const initialState: CalculatorState = {
  error: {
    code: '',
    message: '',
    traceId: '',
    timeStamp: ''
  },
  calculatorResponse: [{ first: 0, second: 0 }],
};
export function CalculatorReducer(
  state: CalculatorState = initialState,
  action: CalculatorActions
): CalculatorState {
  switch (action.type) {
    case CalculatorActionTypes.RESET_CALCULATOR_DIALOG_DATA:
      return {
        ...state,
        error: {
          code: '',
          message: '',
          traceId: '',
          timeStamp: '',
        },
        calculatorResponse: [{ first: 0, second: 0 }]
      };

    case CalculatorActionTypes.CALCULATOR_DETAILS:
      return {
        ...state,
        calculatorResponse: action.payload
      };


    case CalculatorActionTypes.CALCULATOR_DETAILS_SUCCESS:
      return {
        ...state,
        calculatorResponse: action.payload,
      };

    case CalculatorActionTypes.CALCULATOR_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
