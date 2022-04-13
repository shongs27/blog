import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInput({
  className,
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
    <div className={className}>
      <input
        type="text"
        placeholder="찾을 내용을 입력하세요"
        onChange={onChange}
        onKeyDown={onDown}
        value={searchField}
      />
      <Link to="/search">
        <FontAwesomeIcon
          icon={faSearch}
          onClick={handleSubmit}
          transform="down-2"
        />
      </Link>
    </div>
  );
}
