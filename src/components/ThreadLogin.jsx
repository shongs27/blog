import styled from '@emotion/styled';

const Container = styled.div({
  position: 'fixed',
  top: '50vh',
  left: '50vw',
});

export function ThreadLogin({
  handleChange,
  value,
  handleSubmit,
  handleLoginFor,
}) {
  function onChange(e) {
    handleChange(e.target.value);
  }
  return (
    <Container>
      <label htmlFor="thread-login">Password</label>
      <input
        type="password"
        id="thread-login"
        onChange={onChange}
        value={value}
      />

      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button type="button" onClick={handleSubmit}>
          확인
        </button>
        <button type="button" onClick={handleLoginFor}>
          취소
        </button>
      </div>
    </Container>
  );
}
