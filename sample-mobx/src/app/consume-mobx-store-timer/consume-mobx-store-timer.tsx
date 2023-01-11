import styles from './consume-mobx-store-timer.module.scss';
import {TimerMobxStore} from '../stores/timer-mobx-store/timer-mobx-store';
import { observer } from 'mobx-react';
/* eslint-disable-next-line */
export interface ConsumeMobxStoreTimerProps {}

export function ConsumeMobxStoreTimer(props: ConsumeMobxStoreTimerProps) {

  const timerStore = new TimerMobxStore();
  setInterval(()=> {
    timerStore.incrementTime()
  }, 1000)
  const ConsumeMobxView = observer(() => {
    return (
      <>
      <h1>Timer Seconds Passed: {timerStore.seconds}</h1>
      <h1>Timer Seconds Passed: {timerStore.minutesPassed}</h1>
      </>
    )
  })
  return (
    <ConsumeMobxView />
  );
}

export default ConsumeMobxStoreTimer;
