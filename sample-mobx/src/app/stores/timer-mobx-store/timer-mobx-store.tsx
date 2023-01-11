import { action, computed, makeObservable, observable } from 'mobx';
import styles from './timer-mobx-store.module.scss';

/* eslint-disable-next-line */
export interface TimerIntrface {
  seconds: number;
  incrementTime(bySeconds?: number): number;
  decrementTime(bySeconds?: number): number;
  get minutesPassed() : number;
}

export class TimerMobxStore implements TimerIntrface {
  seconds = 0;

  constructor(hours = 0, minutes = 0) {
    this.seconds = hours * minutes;
    makeObservable(this, {
      seconds: observable,
      incrementTime: action,
      decrementTime: action,
      minutesPassed: computed,
    });
  }

  incrementTime() {
    return this.seconds++;
  }
  decrementTime = () => {
    return this.seconds--;
  };
  get minutesPassed() {
    return this.seconds / 60;
  }
}
