import { Link } from 'react-router-dom';

import { navList, navAddress } from '../../../fixture/nav';

import styled from '@emotion/styled';

const Container = styled.div({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  backgroundColor: '#f1f2f6',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',

  '& ul': {
    listStyle: 'none',

    '& a': {
      textDecoration: 'none',
      color: 'black',

      '&:hover': {
        fontWeight: 'bold',
        borderBottom: '2px solid #95a5a6',
      },
    },
  },
});

export default function Nav() {
  return (
    <Container>
      {navList.map((navName, i) => (
        <ul key={i}>
          <li>
            <Link to={`/${navAddress[i]}`}>{navName}</Link>
          </li>
        </ul>
      ))}
    </Container>
  );
}
