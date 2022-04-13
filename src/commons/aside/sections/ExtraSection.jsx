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

const SearchSection = styled.div({
  marginBottom: '57px',
  '& a': {
    marginLeft: '5px',
    '&:active': {
      color: 'black',
    },
  },
});

const Search = styled(SearchInput)({
  '& a': {
    fontSize: '1.4em',
    color: '#0984e3',
  },

  '& input': {
    width: '80%',
    height: '2em',
  },
});

export default function ExtraSection({
  handleChange,
  handleSubmit,
  searchField,
  activeUsers,
}) {
  return (
    <Container>
      <SearchSection>
        <h3>검색</h3>
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
        />
      </SearchSection>

      <AnalysticSection activeUsers={activeUsers} />
    </Container>
  );
}
