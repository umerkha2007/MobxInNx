import { render } from '@testing-library/react';

import TimerMobxStore from './timer-mobx-store';

describe('TimerMobxStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimerMobxStore />);
    expect(baseElement).toBeTruthy();
  });
});
