import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCalculatorComponent } from './score-calculator.component';
import { CalculatorFacade } from './+state/calculator.facade';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScoreCalculatorComponent', () => {
  let component: ScoreCalculatorComponent;
  let fixture: ComponentFixture<ScoreCalculatorComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ ScoreCalculatorComponent ],
      providers: [CalculatorFacade , provideMockStore({})],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty input fields', () => {
    const firstRollInput = fixture.debugElement.query(By.css('input[name="firstRoll"]'));
    const secondRollInput = fixture.debugElement.query(By.css('input[name="secondRoll"]'));

    expect(firstRollInput.nativeElement.value).toEqual('');
    expect(secondRollInput.nativeElement.value).toEqual('');
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    expect(component.onSubmit).toHaveBeenCalled();
  });
  

});
