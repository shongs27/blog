import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { List, Item } from '../../../styles/pageStyle';

const Container = styled.div({
  float: 'left',
  width: '33.3%',
  minHeight: '300px',
  paddingRight: '36px',
  boxSizing: 'border-box',
});

export default function RecentPosts({ recentPosts = [] }) {
  return (
    <Container>
      <h3>최근포스트</h3>
      <List>
        {recentPosts.map(({ _id, title, category }, index) => (
          <Item key={index}>
            <Link to={`/${category}/${_id}`}>
              <span>{`<${
                category[0].toUpperCase() + category.slice(1)
              }> ${title} `}</span>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
