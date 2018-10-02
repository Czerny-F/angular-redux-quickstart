import { Component, OnDestroy } from '@angular/core';

import { NgRedux } from '@angular-redux/store'; // <- New
import { CounterActions } from './app.actions'; // <- New
import { IAppState } from "../store"; // <- New

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'angular-redux-quickstart';
  count: number;
  subscription;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {
    this.subscription = ngRedux.select<number>('count')
      .subscribe(newCount => this.count = newCount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
