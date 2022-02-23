import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RecentPosts from './RecentPosts';

describe('RecentPosts', () => {
  it('render RecentPost List', () => {
    const recentPosts = [
      {
        id: 1,
        title: 'props에 대하여',
        category: 'react',
        likes: 20,
      },
      {
        id: 4,
        title: '변수와 메모리',
        category: 'js',
        likes: 100,
      },
    ];

    const { getByText } = render(
      <MemoryRouter>
        <RecentPosts recentPosts={recentPosts} />
      </MemoryRouter>
    );

    expect(getByText(/props에 대하여/)).not.toBeNull();
    expect(getByText(/js/)).not.toBeNull();
  });
});
