import styled from '@emotion/styled';

const Container = styled.div({
  width: '20em',
  height: '4em',
  lineHeight: '4em',
  textAlign: 'center',

  backgroundColor: '#0fbcf9',

  borderRadius: '30px',
  border: '3px solid #eee',
  outline: '1px solid #aaa',
});

export default function ClipboardGuide() {
  return (
    <Container>
      <span>이메일이 클립보드에 복사 되었습니다</span>
    </Container>
  );
}
