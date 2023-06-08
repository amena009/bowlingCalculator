Bowling Score Calculator
------------------------

Calculates the score a 10 pin bowling game.

This application consists of a dynamic webpage that accurately displays the score of a bowling match.
The user can enter the Webpage and enter the scores into the input fields in the frontend labeled first score 
and second score for each of the two rolls in each frame.

After clicking submit, a facade call (due to NgRx state management) is made to call the calculate function from the service.
the effect finally makes a calculate method call to calculates the sum and returns the sum for the current fram along with total score and
the score till that particular frame.

The data is handled by the browser, so once refreshed the scores are reset.

Versions:-
@angular-devkit/build-angular   13.0.4
@angular/material               13.3.9
@schematics/angular             13.0.4
rxjs                            7.4.0
typescript                      4.4.4


Requirements
------------
run the following commands to install NgRx store in angular app
1. ng add @ngrx/effects@13.2.0 
2. npm install @ngrx/store@13.0.0 

Add angular material
1. ng add @angular/material 

To run the project-
nf s -o

1. First, clone the project and type npm install in the terminal to get all the dependencies
2. Go to the browser and go to http://localhost:4200 to view the webpage
3. Enter the scores and click Add Score button to check the calculator

Frontend: HTML, CSS, Angular
Testing, Jasmine, Karma

Tests
-----

To run the tests 
Go to the terminal and cd into the main folder
to run test cases :-
ng test