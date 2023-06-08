import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreCalculatorComponent } from './score-calculator/score-calculator.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'score-calculator', component: ScoreCalculatorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
