import { Injectable } from '@angular/core';
import { createEffect , Actions, ofType } from '@ngrx/effects';
import * as scoreActions from './calculator.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Frame } from './calculator.model';
import { CalculatorService } from 'src/app/services/calculator.service';
@Injectable()
export class CalculatorEffect {

  constructor(
    private calculatorService: CalculatorService,
    private actions$ : Actions,
  ) { }


  loadScoreCalculator$: Observable<Action>= createEffect( () => this.actions$.pipe(
    ofType(scoreActions.CalculatorActionTypes.CALCULATOR_DETAILS),
    mergeMap((action: scoreActions.CalculatorDetails) => this.calculatorService.calculateScore(action.payload).pipe(
        map((score: Frame[]) => (new scoreActions.CalculatorDetailsSuccess(score))),
        catchError(err => of(new scoreActions.CalculatorDetailsFailure(err)))
    ))
    )
  );

}
 