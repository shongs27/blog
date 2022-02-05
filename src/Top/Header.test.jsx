import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('render header icons', () => {
    const { getByText } = render(<Header />);

    expect(getByText(/소개/)).not.toBeNull();
    expect(getByText(/게임/)).not.toBeNull();
    expect(getByText(/방명록/)).not.toBeNull();
  });
});
