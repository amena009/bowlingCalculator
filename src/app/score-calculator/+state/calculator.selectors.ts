import { createSelector } from '@ngrx/store';
import { selectCalculatorState } from './calculator.reducer';

const selectCalculatorScore = createSelector(
  selectCalculatorState,
  state => state.calculatorResponse
);

const selectError = createSelector(
  selectCalculatorState,
  state => state.error
);

export const CalculatorSelectors = {
  selectError,
  selectCalculatorScore,
};
