import { render } from '@testing-library/react';

import Nav from './Nav';

describe('Nav', () => {
  it('render Nav menus', () => {
    const { getByText } = render(<Nav />);

    expect(getByText(/Home/)).not.toBeNull();
    expect(getByText(/About/)).not.toBeNull();
    expect(getByText(/News/)).not.toBeNull();
    expect(getByText(/Contact/)).not.toBeNull();
  });
});
