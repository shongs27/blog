import { Link } from 'react-router-dom';

import { navList, navAddress } from '../../../fixture/nav';

import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { reverseClicked } from '../../actions';

const Container = styled.div({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',

  //emotion 강의에서 희미한 회색 찾기 #333인가?
  borderTop: '1px solid black',
  borderBottom: '1px solid black',

  '& ul': {
    listStyle: 'none',

    '& a': {
      textDecoration: 'none',
      color: 'black',

      '&:hover': {
        fontWeight: 'bold',
        borderBottom: '1px solid blue',
      },
    },
  },
});

export default function Nav() {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.clicked);

  function handleClick() {
    dispatch(reverseClicked());
  }
  return (
    <Container>
      {navList.map((navName, i) => (
        <ul key={i}>
          <li>
            <Link to={navAddress[i]}>{navName}</Link>
          </li>
        </ul>
      ))}
    </Container>
  );
}
