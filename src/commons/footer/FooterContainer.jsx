import styled from '@emotion/styled';

import RecentPost from './RecentPost';
import FooterBar from './FooterBar';

const Container = styled.div({
  borderTop: '1px solid black',

  height: 'calc(100% - 80px)',
});

export default function FooterContainer() {
  return (
    <Container>
      <RecentPost />
      <FooterBar />
    </Container>
  );
}
