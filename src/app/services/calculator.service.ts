import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Frame } from "../score-calculator/+state/calculator.model";

@Injectable()
export class CalculatorService {

  constructor() { }

  roundScores: number[] = [];
  totalScore: number = 0;

  calculateScore(score: Frame[]) : Observable<any> {
    this.roundScores = [];
    this.totalScore = 0;

    for (let i = 0; i < score.length; i++) {
      const frame = score[i];
      const frameScore = frame.first + frame.second;

      if (frame.first === 10) {
        // Strike
        this.totalScore += frameScore;

        if (i < 9) {
          const nextFrame = score[i + 1];

          if (nextFrame) {
            if (nextFrame.first === 10) {
              // Next frame is also a strike
              this.totalScore += nextFrame.first;
              const nextNextFrame = score[i + 2];

              if (nextNextFrame) {
                this.totalScore += nextNextFrame.first;
              }
            } else {
              // Next frame is not a strike
              this.totalScore += nextFrame.first + nextFrame.second;
            }
          }
        }
      } else if (frameScore === 10) {
        // Spare
        this.totalScore += frameScore;

        if (i < 9) {
          const nextFrame = score[i + 1];
          if (nextFrame) {
            this.totalScore += nextFrame.first;
          }
        }
      } else {
        // Open frame
        this.totalScore += frameScore;
      }

      this.roundScores.push(this.totalScore);
    }
    return of({totalScore: this.totalScore, roundScore: this.roundScores});
  }
  
}