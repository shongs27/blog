import { fireEvent, render } from '@testing-library/react';

import Nav from './Nav';

import { navList } from '../../../fixture/navList';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../../store';
jest.unmock('react-redux');

describe('Nav', () => {
  it('renders Nav Menus', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      </Provider>
    );

    navList.forEach((navName) => {
      expect(container).toHaveTextContent(navName);
    });
  });

  it('render search input', () => {
    const { getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(getByRole('img', { hidden: true }));

    expect(getByPlaceholderText('검색하기')).toBeInTheDocument();
  });
});
