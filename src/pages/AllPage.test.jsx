import { render } from '@testing-library/react';

import AllPage from './AllPage';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

/*
1. 처음에 로드되면 데이터를 잘 받아오는가
2. 페이지 (타이틀,내용) 이나 더보기를 누르면
  페이지가 이동한다 => 링크로 이동은 테스트하지 않는다

*/
describe('AllPage', () => {
  const dispatch = jest.fn();
  useSelector.mockImplementation((selector) =>
    selector({
      pages: {
        All: [
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

  it('페이지가 렌더링 되면 메인페이지 데이터를 받아온다', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AllPage />
      </MemoryRouter>
    );

    expect(dispatch).toBeCalled();
    expect(getByText(/props를 통해/)).not.toBeNull();
  });
});
