import styled from '@emotion/styled';
import AnalysticSection from './AnalysticSection';
import SearchSection from './SearchSection';

export const Container = styled.div({
  float: 'left',
  width: '33.3%',
  minHeight: '300px',
  paddingLeft: '36px',
  boxSizing: 'border-box',
});

export default function ExtraSection() {
  return (
    <Container>
      <SearchSection />
      <AnalysticSection />
    </Container>
  );
}
