import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders HeaderBar', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('소개');
  });

  it('renders contentPage', () => {
    render(<App />);
  });
});
