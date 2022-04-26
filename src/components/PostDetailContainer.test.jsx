import { fireEvent, render } from '@testing-library/react';

import PostDetailContainer from './PostDetailContainer';

import { useSelector, useDispatch } from 'react-redux';
jest.mock('react-redux');

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: jest.fn(() => <div>폰트어썸</div>),
}));

/*
1. params값으로 받아온 selector 값으로 인해 아래 Detail의 타이틀, 내용이 잘보이는가
2. 데이터를 잘 받아오도록 dispatch가 일어나는가
+ selector값을 받아오기전이라면(=>값이 비어져있다) Loading화면이 나오는가 */

describe('PostDetailContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        pages: {},
        page: given.page,
      })
    );
  });

  context('with page', () => {
    given('page', () => ({
      id: 4,
      title: '배열의 반복',
      content: 'for뿐만아니라 forEach, map을 통하여 배열의 반복을',
      category: 'all',
      like: 4,
    }));

    it('renders Page detail', () => {
      const { getByText } = render(<PostDetailContainer />);

      expect(getByText(/배열의 반복/)).not.toBeNull();
      expect(
        getByText(/for뿐만아니라 forEach, map을 통하여 배열의 반복을/)
      ).not.toBeNull();
    });

    it('dispatch "Like" number', () => {
      const { getByText } = render(<PostDetailContainer />);

      fireEvent.click(getByText(/폰트어썸/));

      expect(dispatch).toBeCalled();
    });
  });

  context('without page', () => {
    it('renders waiting guidance', () => {
      const { container } = render(<PostDetailContainer />);

      expect(container).toHaveTextContent(/글을 불러오는 중입니다/);
    });
  });
});
