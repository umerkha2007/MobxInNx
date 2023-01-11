import { observer, useLocalObservable } from 'mobx-react';
import { action, computed, makeObservable, observable } from 'mobx';
import { createContext, createRef, useRef, useState } from 'react';
import MobxUsingObservableObject from './mobx-using-observable-object/mobx-using-observable-object';
import MobxUsingLocalobservableobject from './mobx-using-localobservableobject/mobx-using-localobservableobject';
import MobTimer from './mob-timer/mob-timer';
import TimerMobxStore from './stores/timer-mobx-store/timer-mobx-store';
import ConsumeMobxStoreTimer from './consume-mobx-store-timer/consume-mobx-store-timer';

export interface bugInterface {
  bugs: string[];
  addBug?: (bug: string) => void;
}

export const StoreContext = createContext<bugInterface>({
  bugs: [],
});

export function App() {
  
  return (
    <>
      <MobxUsingObservableObject />
      <MobxUsingLocalobservableobject />
      <MobTimer />
      <ConsumeMobxStoreTimer />
    </>
  );
}

export default App;
