import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faHome,
  faFile,
  faGamepad,
  faSearch,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { useState } from 'react';

import SearchInput from '../aside/sections/SearchInput';
import { keyframes } from '@emotion/react';

import { changeSearchField, getSearchField } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const slideIn = keyframes`
  from { 
    opacity: 0;
    marginLeft: 1000;
  }

  to {
    opacity: 1;
    marginRight: 0;
  }
`;

const BarSearch = styled(SearchInput)({
  animation: `${slideIn} 1s cubic-bezier(0.25, 0.1, 0.25, 1)`,

  '& input': {
    width: '400px',
    height: '1.8rem',

    padding: 0,
    marginTop: '.2rem',

    outline: 'none',
  },

  '& a': {
    marginLeft: '10px',
    color: 'inherit',
    // verticalAlign: 'middle',
  },
});

const Bar = styled.div({
  display: 'flex',
  justifyContent: 'center',
  height: '2.4rem',
  backgroundColor: 'black',
  color: 'gray',

  //돋보기 크기
  fontSize: '20px',

  '& span': {
    marginLeft: '10px',
    lineHeight: '2.4rem',

    animation: `${slideIn} 1s cubic-bezier(0.25, 0.1, 0.25, 1)`,

    //x마크 크기
    fontSize: '30px',
  },
});

const BarLeft = styled.ul({
  display: 'flex',

  height: '2.4rem',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: '0 1em 0',

  '& li': {
    fontWeight: 'bold',
    margin: '.4em 1em 0 0',

    '& span': {
      marginLeft: '.5em',
    },
  },
});

const BarRight = styled.ul({
  display: 'flex',
  height: '2.4em',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',

  margin: 0,
  padding: 0,

  position: 'fixed',
  top: 0,
  right: 0,

  borderRadius: '30px',
  zIndex: 1,

  '& span': {
    lineHeight: '2em',
    paddingLeft: '.8em',
    paddingRight: '.8em',

    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
});

export default function HeaderBar() {
  const [searchSelected, setSearchSelected] = useState(false);

  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.searchField);

  function handleClick() {
    setSearchSelected((prev) => !prev);
  }
  function handleChange(searchField) {
    dispatch(changeSearchField(searchField));
  }
  function handleSubmit() {
    dispatch(getSearchField());
  }

  if (searchSelected) {
    return (
      <Bar>
        <BarSearch
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
        />
        <span>
          <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
        </span>
      </Bar>
    );
  }

  return (
    <>
      <BarLeft>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>

        <li>
          <FontAwesomeIcon icon={faFile} size="lg" />
          <span>소개</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faGamepad} size="lg" />
          <span>게임</span>
        </li>

        <li>
          <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
          <span>방명록</span>
        </li>
      </BarLeft>

      <BarRight>
        <span>
          <Link to="/login"> Hong WonBae </Link>
        </span>

        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />

        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleClick} />
        </span>
      </BarRight>
    </>
  );
}
