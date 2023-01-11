import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { useState } from 'react';
import styles from './mobx-using-observable-object.module.scss';

/* eslint-disable-next-line */
export interface MobxUsingObservableObjectProps {}

export function MobxUsingObservableObject() {
   // mobx using observable object with useState
   const [bugStore] = useState(() =>
   observable({
     bugs: ['Centipede'],
     addBug: (bug: string) => {
       console.log('called')
       bugStore.bugs.push(bug);
     },
   })
 ); 
 const MyComponentView = observer(() => {
   return (
     <ul>
       {bugStore.bugs.map((bug) => (
         <li key={bug}>{bug}</li>
       ))}
     </ul>
   );
 });

 const BugsForm = () => {
   const [bug, setBug] = useState('');
   return (
     <form onSubmit={(e) => e.preventDefault()}>
       <input
         type="text"
         value={bug}
         onChange={(e) => setBug(e.target.value)}
       />
       <button type="submit" onClick={(e) => {console.log('hello');bugStore.addBug?.(bug)}}>
         Add bug
       </button>
     </form>
   );
 };
// mobx using observable object with useState end
  return (
    <>
      <MyComponentView />
      <BugsForm />
    </>
  );
}

export default MobxUsingObservableObject;
