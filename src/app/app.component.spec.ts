/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service'

beforeEachProviders(() => [AppComponent,CalculatorService]);

describe('App: Calculator', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'app works!\'',
  //     inject([AppComponent], (app: AppComponent) => {
  //   expect(app.title).toEqual('app works!');
  // }));
  it('Should Calculate correctly',
     inject([AppComponent,CalculatorService],(app: AppComponent) => {
         AppComponent.calculate(5);
         AppComponent.calculate('x');
         AppComponent.calculate(5);
         expect(app.show).toEqual(25);
     }));
});
