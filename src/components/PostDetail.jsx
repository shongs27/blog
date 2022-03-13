import MarkdownRender from './MarkdownRender';

import styled from '@emotion/styled';
const Container = styled.div({
  width: '1000px',
});

export default function PostDetail({ postDetail }) {
  const { _id, writer, title, description, category, content, likes } =
    postDetail;
  return (
    <Container>
      <MarkdownRender markdown={content} />;
    </Container>
  );
}
