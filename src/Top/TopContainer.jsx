import Header from './HeaderBar';
import Title from './Title';
import Nav from './Nav';

import styled from '@emotion/styled';

const Container = styled.div({
  fontFamily: 'Noto Sans KR',
  margin: '0 auto',
  width: '90%',
});

export default function TopContainer() {
  return (
    <>
      <Header />
      <Container>
        <Title />
        <Nav />
      </Container>
    </>
  );
}
