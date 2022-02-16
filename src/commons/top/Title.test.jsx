import { render } from '@testing-library/react';

import Title from './Title';

import { mainTitle, subtitle } from '../../fixture/title';

describe('Title', () => {
  it('render Main and Sub Title', () => {
    const { container } = render(<Title />);

    expect(container).toHaveTextContent(mainTitle);
    expect(container).toHaveTextContent(subtitle);
  });
});
