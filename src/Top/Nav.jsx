import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',

  borderTop: '1px solid black',
  borderBottom: '1px solid black',

  '& li': {
    marginRight: '1em',
    fontSize: '1.5em',
    padding: '.5em 0',
    '&:hover': {
      fontWeight: 'bold',
      borderBottom: '3px solid blue',
      paddingBottom: '9px',
    },
  },
});

//오른쪽에 어떻게 위치하는가?
const Test = styled.div({
  position: 'absolute',
  right: '1em',
});

export default function Nav() {
  return (
    <div>
      <List>
        <li>Home</li>
        <li>About</li>
        <li>News</li>
        <li>Contact</li>
      </List>

      <Test>
        <FontAwesomeIcon icon={faSearch} />
      </Test>
    </div>
  );
}
