import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faHome,
  faFile,
  faGamepad,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const ListLeft = styled.ul({
  display: 'flex',
  height: '2.4rem',
  backgroundColor: 'black',
  color: 'gray',
  listStyle: 'none',
  margin: 0,
  padding: '0 1em 0',
});

const Item = styled.li({
  marginRight: '1em',
  fontWeight: 'bold',

  marginTop: '.4em',

  '& span': {
    marginLeft: '.5em',
  },
});

const ListRight = styled.ul({
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

  borderRadius: '20px',
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
  return (
    <>
      <ListLeft>
        <Item>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faFile} size="lg" />
          <span>소개</span>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faGamepad} size="lg" />
          <span>게임</span>
        </Item>

        <Item>
          <FontAwesomeIcon icon={faChalkboardTeacher} size="lg" />
          <span>방명록</span>
        </Item>
      </ListLeft>

      <ListRight>
        <span>
          <Link to="/login"> Hong WonBae </Link>
        </span>

        <img src="img/hongs.jpg" alt="홍원배" width="35" height="35" />

        <span>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </span>
      </ListRight>
    </>
  );
}
