import styled from '@emotion/styled';

import RecentPost from './section/RecentPost';
import FooterBar from './FooterBar';

const Container = styled.div({
  borderTop: '1px solid black',
});

export default function FooterContainer() {
  return (
    <Container>
      <RecentPost />
      <FooterBar />
    </Container>
  );
}
