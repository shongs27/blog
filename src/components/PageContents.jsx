import { Link, Routes, Route, useParams } from 'react-router-dom';

import styled from '@emotion/styled';

const Article = styled.article({
  minHeight: '50vh',
  marginBottom: '3em',

  '& h3': {
    padding: '1em 0',
    borderBottom: '1px solid rgb(230, 230, 230)',
  },
});

const Item = styled.div({
  borderBottom: '1px solid rgb(230, 230, 230)',
  paddingTop: '30px',
  paddingBottom: '22px',
});

export default function PageContents({ articleTitle, pageContents = [] }) {
  return (
    <Article id="content">
      <h3>{articleTitle}</h3>
      <section className="inner">
        {pageContents.map(({ id, title, content, category }) => {
          //excerpt 기능
          if (content.length > 200) {
            content = content.substring(0, 200) + '...';
          }

          return (
            <Item key={id} className="post_item">
              <span>{title}</span>
              <p className="post_content" style={{ color: '#666' }}>
                {content}
              </p>
              <Link to={`/${category}/${id}`}>더보기 &gt;</Link>
            </Item>
          );
        })}
      </section>
    </Article>
  );
}
