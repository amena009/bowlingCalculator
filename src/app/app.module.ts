import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreCalculatorComponent } from './score-calculator/score-calculator.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CalculatorEffect } from './score-calculator/+state/calculator.effect';
import { StoreModule } from '@ngrx/store';
import { CalculatorFacade } from './score-calculator/+state/calculator.facade';
import { CALCULATOR_FEATURE_KEY, CalculatorReducer } from './score-calculator/+state/calculator.reducer';
import { CalculatorService } from './services/calculator.service';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCalculatorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}), 
    StoreModule.forFeature(CALCULATOR_FEATURE_KEY, CalculatorReducer),
    EffectsModule.forRoot([CalculatorEffect])],
  providers: [CalculatorService,CalculatorFacade,],
  bootstrap: [AppComponent]
})
export class AppModule { }
