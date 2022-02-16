import { render } from '@testing-library/react';

import PagesContainer from './PagesContainer';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../fixture/navList';

describe('PagesContainer', () => {
  function renderPage(path) {
    return render(
      <MemoryRouter initialEntries={[`${path}`]}>
        <PagesContainer />
      </MemoryRouter>
    );
  }

  it('renders router Pages', () => {
    navList.forEach((navName, i) => {
      const { container } = renderPage(navAddress[i]);

      expect(container).toHaveTextContent(navName);
    });
  });
});
