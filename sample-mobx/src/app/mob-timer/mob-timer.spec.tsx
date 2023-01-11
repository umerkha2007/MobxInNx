import { render } from '@testing-library/react';

import MobTimer from './mob-timer';

describe('MobTimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobTimer />);
    expect(baseElement).toBeTruthy();
  });
});
