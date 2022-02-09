import { Link } from 'react-router-dom';

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

export default function PageField({ articleTitle, pageContents }) {
  return (
    <Article id="content">
      <h3>{articleTitle}</h3>
      <section className="inner">
        {pageContents &&
          pageContents.map((pageDetail) => {
            let excerpt = pageDetail.content;
            if (excerpt.length > 200) {
              excerpt = excerpt.substring(0, 200) + '...';
            }

            return (
              <Item key={pageDetail.id} className="post_item">
                <span>{pageDetail.title}</span>
                <p className="post_content" style={{ color: '#666' }}>
                  {excerpt}
                </p>
                <Link to="/">더보기 &gt;</Link>
              </Item>
            );
          })}
      </section>
    </Article>
  );
}
