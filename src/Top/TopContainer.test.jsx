import { render } from '@testing-library/react';

import TopContainer from './TopContainer';

import { MemoryRouter } from 'react-router-dom';

import { mainTitle } from '../../fixture/title';
import { navList } from '../../fixture/navList';

/* Header Nav Title이 잘보이고 결합되어있는가 
하나씩만 점검하자
1. Header 글자, 이미지(?) 보이는가
2. Nav 글자 보이는가
3. Title이 보이는가
*/
describe('TopContainer', () => {
  function renderContainer() {
    return render(
      <MemoryRouter>
        <TopContainer />
      </MemoryRouter>
    );
  }

  it('render <Title />', () => {
    const { container } = renderContainer();

    expect(container).toHaveTextContent(mainTitle);
  });

  it('render <Nav />', () => {
    const { container } = renderContainer();
    const Home = navList[0];

    expect(container).toHaveTextContent(Home);
  });
});
