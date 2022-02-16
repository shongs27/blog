import { render } from '@testing-library/react';

import ReactPage from './ReactPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

/*
1. 처음에 로드되면 데이터를 잘 받아오는가
*/
describe('ReactPage', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) =>
    selector({
      pages: {
        react: [
          {
            id: 1,
            title: 'props에 대하여',
            content: '컴포넌트는 props를 통해 데이터를 전달한다',
          },
        ],
      },
    })
  );
  useDispatch.mockImplementation(() => dispatch);

  it('render ReactPage contents list', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ReactPage />
      </MemoryRouter>
    );

    expect(dispatch).toBeCalled();
    expect(getByText(/props를 통해/)).not.toBeNull();
  });
});
