import { render } from '@testing-library/react';

import App from './App';

import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  function renderPage(path) {
    return render(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
    );
  }

  it('renders MainPage', () => {
    const { container } = renderPage('/');

    expect(container).toHaveTextContent('본문');
  });

  it('renders NotPage', () => {
    const { container } = renderPage('/not');

    expect(container).toHaveTextContent('not');
  });
});
