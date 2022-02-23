import { fireEvent, render } from '@testing-library/react';

import SearchSection from './SearchSection';

describe('SearchSection', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderSearch() {
    return render(
      <SearchSection handleChange={handleChange} handleSubmit={handleSubmit} />
    );
  }

  it('changes Search Input text', () => {
    const { getByPlaceholderText } = renderSearch();
    const input = getByPlaceholderText(/내용을 입력/);

    expect(input).not.toBeNull();

    fireEvent.change(input, { target: { value: /props/ } });

    expect(handleChange).toBeCalledWith(/props/);
  });

  it('submit Search Input Text', () => {
    const { getByAltText } = renderSearch();

    fireEvent.click(getByAltText('faSearch'));

    expect(handleSubmit).toBeCalled();
  });
});
