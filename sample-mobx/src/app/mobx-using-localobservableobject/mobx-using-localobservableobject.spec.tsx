import { render } from '@testing-library/react';

import MobxUsingLocalobservableobject from './mobx-using-localobservableobject';

describe('MobxUsingLocalobservableobject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobxUsingLocalobservableobject />);
    expect(baseElement).toBeTruthy();
  });
});
