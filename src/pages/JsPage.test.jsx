import { render } from '@testing-library/react';

import JsPage from './RecentPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

describe('JsPage', () => {
  const dispatch = useDispatch();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      pages: {
        js: [
          {
            id: 1,
            title: '변수명의 차이',
            content:
              'const, let은 변수 호이스팅이 일어나지 않는것처럼 보이지만',
          },
        ],
      },
    })
  );

  it('render JsPage contents list', () => {
    const { getByText } = render(
      <MemoryRouter>
        <JsPage />
      </MemoryRouter>
    );

    expect(dispatch).toBeCalled();
    expect(getByText(/변수 호이스팅이/)).not.toBeNull();
  });
});
