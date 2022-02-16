import { render } from '@testing-library/react';

import Nav from './Nav';

import { navList } from '../../fixture/navList';
import { MemoryRouter } from 'react-router-dom';

describe('Nav', () => {
  it('renders Nav Menus', () => {
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    navList.forEach((navName) => {
      expect(container).toHaveTextContent(navName);
    });
  });
});
