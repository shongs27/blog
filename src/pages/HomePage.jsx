import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',

  width: '70%',
  margin: '7em auto',
});

const Greetings = styled.div({
  width: '35%',
  marginLeft: '7em',

  '& h1': {
    lineHeight: '1.6em',
  },

  '& button': {
    marginTop: '2em',

    width: '200px',
    minHeight: '70px',
    padding: '1em 2em',

    overflow: 'hidden',

    fontSize: '1.2em',
    backgroundColor: '#dfe5ed',

    borderRadius: '2em',
    border: '3px solid #4a5568',

    transition: 'width .5s ease-out, backgroundColor .5s ease-out',

    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },

    '&:hover': {
      cursor: 'pointer',
      width: '250px',
      backgroundColor: '#8d99ff',

      fontWeight: 'bold',
      color: '#efefef',

      border: 'none',
    },
  },
});

const Image = styled.div({
  width: '65%',
  textAlign: 'center',

  '& img': {
    borderRadius: '50%',
    boxShadow: '10px 10px rgba(0,0,0,20%)',
  },

  '&:hover': {
    transform: 'rotateY(180deg)',
    transition: '1s ease-out',
  },
});

export default function HomePage() {
  return (
    <Container>
      <Greetings>
        <span>작업과 기록의 블로그</span>
        <h1>
          안녕하세요! <br />
          프론트엔드 개발자 <br />
          <strong style={{ color: '#8d99ff' }}>홍원배</strong>입니다
        </h1>
        <p>제가 공부한 내용을 정리하여 공유하는 블로그입니다</p>

        <button type="button">
          <Link to="/me">About Me</Link>
        </button>
      </Greetings>

      <Image>
        <a href="https://github.com/shongs27" target="_blank" title="깃허브">
          <img
            src="https://avatars.githubusercontent.com/u/55541745?v=4"
            alt="릭앤모티 모티"
            width="380px"
            height="380px"
          />
        </a>
      </Image>
    </Container>
  );
}
