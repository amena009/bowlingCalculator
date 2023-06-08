import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    const welcomeMessage = fixture.nativeElement.querySelector('h1');
    expect(welcomeMessage.textContent).toContain('Welcome to the Bowling game!');
  });

  it('should navigate to score calculator page when button is clicked', () => {
    spyOn(component['router'], 'navigateByUrl');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/score-calculator');
  });
});
