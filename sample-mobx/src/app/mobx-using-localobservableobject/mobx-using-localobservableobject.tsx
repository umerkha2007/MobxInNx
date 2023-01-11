import { observer, useLocalObservable } from 'mobx-react';
import { useRef } from 'react';
import styles from './mobx-using-localobservableobject.module.scss';

/* eslint-disable-next-line */
export interface MobxUsingLocalobservableobjectProps {}

export function MobxUsingLocalobservableobject() {
  const localStore = useLocalObservable(() => ({
    bugs: ['Centipede'],
    addBugs: (bug?: string) => {
      if (bug) localStore.bugs.push(bug);
    },
  }));

  const ComponentViewLocal = observer(() => {
    return (
      <ul>
        {localStore.bugs.map((bug: string) => {
          return <h1>{bug}</h1>;
        })}
      </ul>
    );
  });

  const AddBugForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={inputRef} />
        <button
          type="submit"
          onClick={(e) => localStore.addBugs(inputRef.current?.value)}
        >
          Add
        </button>
      </form>
    );
  };
  return (
    <>
      <ComponentViewLocal />
      <AddBugForm />
    </>
  );
}

export default MobxUsingLocalobservableobject;
