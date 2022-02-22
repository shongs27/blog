import styled from '@emotion/styled';

export const Container = styled.div({
  marginBottom: '57px',
});

export default function SearchSection(handleChange, handleSubmit) {
  return (
    <Container>
      <h3>검색</h3>
      <input
        type="text"
        placeholder="찾을 내용을 입력하세요"
        onChange={handleChange}
      ></input>
    </Container>
  );
}
