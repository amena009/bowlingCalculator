
import { Injectable } from '@angular/core';
import * as CalculatorActions from './calculator.actions';
import { CalculatorState } from './calculator.state';
import { CalculatorSelectors } from './calculator.selectors';
import { Store } from '@ngrx/store';
import { Frame } from './calculator.model';
import { Observable } from 'rxjs';


@Injectable()
export class CalculatorFacade {
  constructor(private store: Store<CalculatorState>) { }

  private getCalculatorScore$ = this.store.select( CalculatorSelectors.selectCalculatorScore );

  private Error$ = this.store.select(CalculatorSelectors.selectError);

 
  getScoreDetails() {
    return this.getCalculatorScore$;
  }

  getError() {
    return this.Error$;
  }

  loadScoreCalculator(scoreCalculator: Frame[]){
    this.store.dispatch(
      new CalculatorActions.CalculatorDetails(scoreCalculator)
    );
  }
}
