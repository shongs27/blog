import { render } from '@testing-library/react';

import AnalysticSection from './AnalysticSection';

describe('AnalysticSection', () => {
  it('render Visitors number', () => {
    const { getByText } = render(<AnalysticSection />);

    ['전체 방문자', '오늘', '어제'].forEach((text) => {
      expect(getByText(text)).not.toBeNull();
    });
  });
});
