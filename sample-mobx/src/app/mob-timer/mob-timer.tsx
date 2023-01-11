import { action, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import styles from './mob-timer.module.scss';

/* eslint-disable-next-line */
export interface MobTimerProps {}

export function MobTimer(props: MobTimerProps) {
  class Timer {
    seconds = 0;
    timePassed = 0;
    constructor() {
      makeObservable(this, {
        seconds: observable,
        timePassed: observable,
        incrementSeconds: action, // used to trigger an event
        decrementSeconds: action,
        minutesPassed: computed //used when you want to do calculation on an observerable property
      })
      this.seconds = 0;
      this.timePassed = 0;
    }

    incrementSeconds() {
      this.seconds++;
    }

    decrementSeconds() {
      this.seconds--;
    }
    
    get minutesPassed() {
      return this.seconds / 60;
    }
  }

  const timerObj = new Timer();
  
  const TimerViewComponent = observer(() => {
    return (
    <>
      <h2>Timer Seconds Past: {timerObj.seconds}</h2>
      <h2>Timer Minutes Past: {timerObj.minutesPassed}</h2>
    </>
    )
  })
  setInterval(() => {
    timerObj.incrementSeconds();
  },1000)

  return (
    <TimerViewComponent />
  )
}

export default MobTimer;
