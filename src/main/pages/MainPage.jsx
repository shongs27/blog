import styled from '@emotion/styled';
import Footer from '../../Footer/FooterContainer';

const Container = styled.div({
  width: '90%',
  margin: '0 auto',

  // minHeight: 'calc(100vh - 340px)',
});

export default function MainPage() {
  return (
    <Container>
      <span>전체</span> <Footer />
    </Container>
  );
}
