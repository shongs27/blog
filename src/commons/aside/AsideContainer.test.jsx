import { render } from '@testing-library/react';

import AsideContainer from './AsideContainer';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../../fixture/navList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

/*
    1. 렌더링하고 나서
    FooterPosts들을 dispatch하고 있는가
    // RecentPosts, PopularPosts

     store의 값이 정렬되어 있는 포스트들이 있다면
    해당 항목들을 잘 보여주는가?

    2. 검색창과 누적 방문자수를 잘 보여주는가
*/

describe('AsideContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector((state) => {
        posts: {
          recentPosts: [
            {
              id: 1,
              title: 'props에 대하여',
              category: 'react',
              likes: 0,
            },
            { id: 1, title: '변수명의 차이', category: 'js', likes: 0 },
            {
              id: 150,
              title: '자바스크립트로 게임만들기',
              category: 'js',
              likes: 2200,
            },
            {
              id: 3,
              title: '최적화와 얕은비교',
              category: 'react',
              likes: 0,
            },
            {
              id: 12,
              title: '리액트 7일만에 마스터하는 법',
              category: 'react',
              likes: 120,
            },
          ];
        }
      })
    );
  });

  it('render recentPosts', () => {
    const { getByText } = render(<AsideContainer />);

    expect(dispatch).toBeCalled();

    expect(getByText(/props에 대하여/)).not.toBeNull();
    expect(getByText(/react/)).not.toBeNull();
  });

  it('render popularPosts', () => {
    const { getByText } = render(<AsideContainer />);

    expect(dispatch).toBeCalled();

    expect(getByText(/자바스크립트로 게임만들기/)).not.toBeNull();
    expect(getByText(/7일만에/)).not.toBeNull();
  });
});
