import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';

export const Container = styled.div({
  marginBottom: '57px',

  '& a': {
    padding: '5px',
  },
});

export default function SearchSection({
  handleChange,
  handleSubmit,
  searchField,
}) {
  function onChange(e) {
    handleChange(e.target.value);
  }

  function onDown(e) {
    // keyCode 13은 Enter
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <Container>
      <h3>검색</h3>
      <input
        type="text"
        placeholder="찾을 내용을 입력하세요"
        onChange={onChange}
        onKeyDown={onDown}
        value={searchField}
      />
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} onClick={handleSubmit} />
      </Link>
    </Container>
  );
}
