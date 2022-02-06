import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { navList, navAddress } from '../../fixture/navList';
import { Link } from 'react-router-dom';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',

  borderTop: '1px solid black',
  borderBottom: '1px solid black',
});

const Item = styled.li({
  marginRight: '1em',
  padding: '.7em 0',

  '& a': {
    fontSize: '1.5em',
    textDecoration: 'none',

    '&:hover': {
      fontWeight: 'bold',
      borderBottom: '3px solid blue',
      paddingBottom: '8px',
    },
  },
});

//오른쪽에 어떻게 위치하는가?
const Test = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
});

export default function Nav() {
  return (
    <Test>
      <List>
        {navList.map((nav, i) => (
          <Item key={i}>
            <Link to={navAddress[i]}>{nav}</Link>
          </Item>
        ))}
      </List>

      <FontAwesomeIcon icon={faSearch} />
    </Test>
  );
}
