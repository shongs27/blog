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

const ProgressBar = styled.div(({ scroll }) => ({
  background: `linear-gradient(to right, rgb(85,85,85) ${scroll}%, transparent 0)`,
  backgroundRepeat: 'no-repeat',

  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  height: '4px',
  zIndex: 99999,
}));

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

    padding: '0 .4em',
    marginTop: '.2rem',

    outline: 'none',
  },

  '& a': {
    marginLeft: '10px',
    color: 'inherit',
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
    display: 'inline-block',
    marginTop: '3px',
    marginLeft: '10px',

    animation: `${slideIn} 1s cubic-bezier(0.25, 0.1, 0.25, 1)`,

    //x마크 크기
    fontSize: '1.6em',
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

    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },

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
  const scroll = useSelector((state) => state.scrollY);

  function handleSearch() {
    window.scrollTo(0, 0);
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
          <FontAwesomeIcon icon={faXmark} onClick={handleSearch} />
        </span>
      </Bar>
    );
  }

  return (
    <>
      <ProgressBar scroll={scroll} />
      <BarLeft>
        <li style={{ margin: '.4em 3em 0 1em' }}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>

        <li>
          <Link to="/me">
            <FontAwesomeIcon icon={faFile} size="lg" />
            <span>소개</span>
          </Link>
        </li>

        <li>
          <a href="mortyGame/index.html" target="_blank">
            <FontAwesomeIcon icon={faGamepad} size="lg" />
            <span>게임</span>
          </a>
        </li>

        <li>
          <Link to="/board">
            <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
            <span>방명록</span>
          </Link>
        </li>
      </BarLeft>

      <BarRight>
        <span>
          <Link to="/login"> Hong WonBae </Link>
        </span>

        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />

        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" onClick={handleSearch} />
        </span>
      </BarRight>
    </>
  );
}
