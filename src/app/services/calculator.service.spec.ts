import { TestBed, inject } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { CalculatorFacade } from '../score-calculator/+state/calculator.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { publishFacade } from '@angular/compiler';

describe('ScoreCalculatorService', async () => {
  let service: CalculatorService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [provideMockStore({}), CalculatorService,CalculatorFacade],
    }).compileComponents();
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy(); 
  }));

  it('should calculate the score correctly for an open frame', () => {
    const score = [
      { first: 3, second: 4 },
      { first: 2, second: 5 },
    ];
    const expectedScore = {totalScore: 14 };
     
    service.calculateScore(score).subscribe((result) => {
      expect(result.totalScore).toEqual(expectedScore.totalScore);
    });
  });

  it('should calculate the score correctly for a spare', () => {
    const score = [
      { first: 3, second: 7 },
      { first: 2, second: 5 },
    ];
    const expectedScore = {totalScore: 19 };

    service.calculateScore(score).subscribe((result) => {
      expect(result.totalScore).toEqual(expectedScore.totalScore);
    });
  });

  it('should calculate the score correctly for a strike', () => {
    const score = [
      { first: 10, second: 0 },
      { first: 2, second: 5 },
    ];
    const expectedScore = {totalScore: 24 };

    service.calculateScore(score).subscribe((result) => {
      expect(result.totalScore).toEqual(expectedScore.totalScore);
    });
  });

});

