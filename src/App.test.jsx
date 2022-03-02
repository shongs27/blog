import { render } from '@testing-library/react';

import App from './App';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../fixture/navList';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './actions';

import { getItem } from './services/storage';
jest.mock('./services/storage');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    getItem.mockImplementation(() => given.getItem);
  });

  function renderApp() {
    return render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  }

  //localStorage 확인해서 token있으면 redux로 보내준다
  //node.js환경이니깐 localStorage 접근 못한다 => mock
  context('when logged in', () => {
    it('calls dispatch with login token', () => {
      given('getItem', () => 'wowToken');

      renderApp();

      expect(dispatch).toBeCalledWith(setAccessToken('wowToken'));
    });
  });

  context('when logged out', () => {
    it("doesn't call dispatch", () => {
      given('getItem', () => {});

      renderApp();

      expect(dispatch).not.toBeCalledWith(setAccessToken());
    });
  });
});
