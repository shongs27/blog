import { Link, Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

const Article = styled.article({
  marginBottom: '3em',

  '& h2': {
    padding: '1em 0',
    borderBottom: '1px solid rgb(230, 230, 230)',
  },
});

const Item = styled.div({
  borderBottom: '1px solid rgb(230, 230, 230)',
  paddingTop: '30px',
  paddingBottom: '22px',
});

export default function PagesPosts({ articleTitle, pagesPosts }) {
  return (
    <Article>
      <h2>{articleTitle}</h2>
      {pagesPosts &&
        pagesPosts.map(({ _id, title, description, category }) => {
          //excerpt 기능
          if (description.length > 200) {
            description = description.substring(0, 200) + '...';
          }

          return (
            <Item key={_id} className="post_item">
              <span>{title}</span>
              <p className="post_content" style={{ color: '#666' }}>
                {description}
              </p>
              <Link to={`/${category}/${_id}`}>더보기 &gt;</Link>
            </Item>
          );
        })}
      <Outlet />
    </Article>
  );
}