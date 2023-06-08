import { Component, OnDestroy, OnInit } from '@angular/core';
import { Frame } from './+state/calculator.model';
import { CalculatorFacade } from './+state/calculator.facade';
import { Subject, takeUntil } from 'rxjs';
import { CustomErrors } from './error.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-score-calculator',
  templateUrl: './score-calculator.component.html',
  styleUrls: ['./score-calculator.component.scss'],
})
export class ScoreCalculatorComponent implements OnInit, OnDestroy {
   firstRoll : number = 0; 
   secondRoll : number = 0;
  error: CustomErrors = {
    code: '',
    message: '',
    traceId: '',
    timeStamp: '',
  };
  totalScore: number = 0;
  roundScores: number[] = [];

  constructor(private calculatorFacade: CalculatorFacade) {
  }
  frames: Frame[] = [];
  destroy$ = new Subject<null>();
  ngOnInit(): void {

    this.calculatorFacade
      .getError()
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: CustomErrors) => {
        if (error) {
          this.error = error;
        }
      });
  }


  onSubmit(scoreForm: NgForm) {
    this.firstRoll = parseInt(scoreForm.value.firstRoll);
    this.secondRoll = parseInt(scoreForm.value.secondRoll);
    const first = parseInt(scoreForm.value.firstRoll);
    const second = parseInt(scoreForm.value.secondRoll);

    if (!isNaN(first) && !isNaN(second)) {
      if (first <= 10 && second <= 10) {
      
        this.frames = [...this.frames, { first, second }];
        // this.calculateScore();
        this.calculatorFacade.loadScoreCalculator(this.frames);
        this.calculatorFacade.getScoreDetails()
          .pipe(takeUntil(this.destroy$))
          .subscribe((score: any) => {
            if (score) {
              this.totalScore = score.totalScore;
              this.roundScores = score.roundScore;
            }
          });
      } 
      else {
      this.calculatorFacade.getError()
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: CustomErrors) => {
        if (error) {
         // console.log(error);
         alert("Entered score should be a digit and not more than 10.")
        }
      });
      this.firstRoll = 0;
      this.secondRoll = 0;
    }
    }
  }

  ngOnDestroy() {

    this.destroy$.complete();
  }
}