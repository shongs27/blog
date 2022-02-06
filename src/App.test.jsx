import { render, screen } from '@testing-library/react';

import App from './App';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../fixture/navList';

describe('App', () => {
  function renderPage(path) {
    return render(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
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
