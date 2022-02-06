import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HeaderBar from './HeaderBar';

describe('HeaderBar', () => {
  it('render HeaderBar icons', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>
    );

    expect(getByText(/소개/)).not.toBeNull();
    expect(getByText(/게임/)).not.toBeNull();
    expect(getByText(/방명록/)).not.toBeNull();
  });
});
