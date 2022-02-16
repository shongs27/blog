import { render } from '@testing-library/react';

import PageField from './PageField';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../../fixture/navList';

/*
props가 article, content일 때
1. article 제목이 잘 렌더링 되는지
2. content 잘 보여주는가
Link에 대한 테스트는 결국 route에 대한 테스트이므로 여기서는 관심사가 아니다
*/

describe('PageContents', () => {
  //많은 컨텐츠 중에 하나만 테스트
  it('renders the Contents of page');
  const { queryByText } = render(
    <MemoryRouter>
      <PageField
        articleTitle="전체글"
        itemTitle="주간회고 1주차"
        itemContent="공식문서를 생활화하자"
      />
    </MemoryRouter>
  );

  expect(queryByText(/전체글/)).not.toBeNull();
  expect(queryByText(/주간회고 1주차/)).not.toBeNull();
  expect(queryByText(/공식문서를 생활화하자/)).not.toBeNull();
});
