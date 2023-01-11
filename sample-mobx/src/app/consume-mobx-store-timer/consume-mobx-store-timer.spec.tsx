import { render } from '@testing-library/react';

import ConsumeMobxStoreTimer from './consume-mobx-store-timer';

describe('ConsumeMobxStoreTimer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsumeMobxStoreTimer />);
    expect(baseElement).toBeTruthy();
  });
});
