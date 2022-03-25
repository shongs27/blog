import styled from '@emotion/styled';
import AnalysticSection from './AnalysticSection';
import SearchInput from './SearchInput';

const Container = styled.div({
  float: 'left',
  width: '33.3%',
  minHeight: '300px',
  paddingLeft: '60px',
  boxSizing: 'border-box',
});

const SearchContainer = styled.div({
  marginBottom: '57px',
  '& a': {
    marginLeft: '5px',
    '&:active': {
      color: 'black',
    },
  },
});

export default function ExtraSection({
  handleChange,
  handleSubmit,
  searchField,
  dailyActiveUsers,
}) {
  return (
    <Container>
      <SearchContainer>
        <h3>검색</h3>
        <SearchInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
        />
      </SearchContainer>

      <AnalysticSection dailyActiveUsers={dailyActiveUsers} />
    </Container>
  );
}
