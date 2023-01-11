import { render } from '@testing-library/react';

import MobxUsingObservableObject from './mobx-using-observable-object';

describe('MobxUsingObservableObject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobxUsingObservableObject />);
    expect(baseElement).toBeTruthy();
  });
});
