import { fireEvent, render } from '@testing-library/react';

import LoginPage from './LoginPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { changeLoginField } from '../actions';
jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        login: {
          loginField: {
            email: '',
            password: '',
          },
          accessToken: given.accessToken,
        },
      })
    );
  });

  context('when Logged out', () => {
    it('render Login input form', () => {
      const { container, getByLabelText } = render(<LoginPage />);

      expect(container).toHaveTextContent('로그인');
      expect(getByLabelText('Email')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();
    });

    it('listens LoginField changeEvent', () => {
      const { getByLabelText } = render(<LoginPage />);
      const inputs = [
        { text: 'Email', value: 'dkxm@naver.com', name: 'email' },
        { text: 'Password', value: '1234', name: 'password' },
      ];

      inputs.forEach(({ text, value, name }) => {
        fireEvent.change(getByLabelText(text), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith(changeLoginField(name, value));
      });
    });

    it('listens LoginButton clickEvent', () => {
      const { getByText } = render(<LoginPage />);

      fireEvent.click(getByText('인증'));

      expect(dispatch).toBeCalledWith(requestLogin());
    });
  });

  context('when Logged in', () => {
    it('render Logout button', () => {
      given('accessToken', () => '주어진토큰목걸이');
      const { getByText } = render(<LoginPage />);

      fireEvent.click(getByText('떠나기'));

      expect(dispatch).toBeCalledWith(requestLogout());
    });
  });
});
