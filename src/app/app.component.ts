import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; // <- New
import { Observable } from 'rxjs';

import { CounterActions } from './app.actions'; // <- New
import { IAppState } from "../store"; // <- New

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-redux-quickstart';
  @select() readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
    // this.count$ = ngRedux.select<number>('count');

    // this.subscription = ngRedux.select<number>('count')
    //   .subscribe(newCount => this.count = newCount);
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
