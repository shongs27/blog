import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardUser,
  faCircleArrowUp,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import ClipboardGuide from './ClipboardGuide';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',

  width: '200px',
  padding: '.1em',
  backgroundColor: '#d2dae2',

  borderRadius: '30px',
  border: '1px solid #eee',
  outline: '1px solid #aaa',
});

const Item = styled.button(({ className }) => ({
  backgroundColor: '#d2dae2',
  padding: '.3em',
  fontSize: '2em',

  border: 'none',
  borderRight: className ? '' : '2px solid #eee',

  '& a': {
    color: 'inherit',
  },
}));

const fadeInOut = keyframes`
    from, to {
      visibility: visible;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
`;

const ClipboardPosition = styled.div(({ clicked }) => ({
  position: 'fixed',
  right: '5em',
  bottom: '3em',

  visibility: 'hidden',
  animation: clicked && `${fadeInOut} 3s`,
}));

export default function ResumeMenu() {
  const [clipboard, setClipboard] = useState(false);

  function handleEmail() {
    navigator.clipboard.writeText('shongs27@gmail.com');
    setClipboard((prev) => !prev);
  }

  function handleArrow() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Container>
        <Item>
          <FontAwesomeIcon
            icon={faEnvelope}
            title="이메일 복사"
            onClick={handleEmail}
          />
        </Item>
        <Item>
          <Link to="/board">
            <FontAwesomeIcon icon={faChalkboardUser} title="게시판으로 가기" />
          </Link>
        </Item>
        <Item className="resume-menu__item--end">
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            title="페이지 상단으로 이동"
            onClick={handleArrow}
          />
        </Item>
      </Container>

      {clipboard && (
        <ClipboardPosition clicked={clipboard}>
          <ClipboardGuide />
        </ClipboardPosition>
      )}
    </>
  );
}
