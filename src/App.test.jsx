import { fireEvent, render } from '@testing-library/react';

import EntrancePage from './EntrancePage';

import { MemoryRouter } from 'react-router-dom';
import { navList, navAddress } from '../fixture/navList';

/*
    1. 입구 특정 (그림, 글자)를 누르면 홈페이지로 링크가 이동한다
*/

describe('EntrancePage', () => {
  it('Connect site to the Blog HomePage', () => {
    const { getByText } = render(<EntrancePage />);

    expect(getByText('연결')).not.toBeNull();

    fireEvent.click('연결');

    expect(getByText('연결')).toBeNull();
  });
});
