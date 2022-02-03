import { render } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  it('render Main and Sub Title', () => {
    const { container } = render(<Title />);

    expect(container).toHaveTextContent(/maintitle/);
    expect(container).toHaveTextContent(/subtitle/);
  });
});
