import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PopularPosts from './PopularPosts';

describe('PopularPosts', () => {
  it('render PopularPost List', () => {
    const popularPosts = [
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
        <PopularPosts popularPosts={popularPosts} />
      </MemoryRouter>
    );

    expect(getByText(/props에 대하여/)).not.toBeNull();
    expect(getByText(/js/)).not.toBeNull();
  });
});
