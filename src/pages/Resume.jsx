import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faComment } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { LinkPage } from '../styles/pageStyle';
import { useState } from 'react';
import ResumeMenu from '../components/ResumeMenu';

const Head = styled.h1({
  margin: '2em 1em',
});

const Category = styled.div(({ className }) => ({
  minHeight: className === 'mottos' ? '18em' : '24em',

  borderBottom: '1px solid #e6e6e6',
  marginBottom: '2em',

  '& h2': {
    padding: '.5em',
    backgroundColor: '#3498db',
  },
}));

const Content = styled.div({
  display: 'flex',
  padding: '0.6em',
  margin: '0',
});

const ContentIntroduce = styled.div({
  margin: '.8em 2em',
});

const Container = styled.div({
  marginTop: '10px',
  padding: '20px',
  border: '2px solid rgb(33, 150, 243)',
  borderRadius: '20px',
});

const bounce = keyframes`
  from, to {
    transform: translate3d(0,0,0);
  }

 
  50% {
    transform: translate3d(0, 5px, 0);
  }
  
  `;

const Addon = styled.div({
  display: 'flex',
  justifyContent: 'end',
});

const ListMenu = styled.button(({ clicked }) => ({
  border: 'none',
  backgroundColor: 'inherit',

  animation: clicked || `${bounce} 1.8s ease infinite alternate`,
}));

const fadeIn = keyframes`
    from {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
`;

const ItemMenu = styled.div(({ clicked }) => ({
  position: 'relative',
  right: '1.2em',
  top: '-1em',

  visibility: 'hidden',
  animation: clicked && `${fadeIn} 2s ease forwards`,
}));

const MottosList = styled.ul({
  '& li': {
    marginTop: '10px',
    marginBottom: '10px',
  },
});

const CertificationContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '& div': {
    margin: '10px',
  },
});

export default function Resume() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <>
      <Head>😁발전하는 개발자 홍원배입니다</Head>

      <Category className="aboutme">
        <h2>🙋‍♂️ About me</h2>
        <Content>
          <div>
            <img
              src="img/hongs.jpg"
              alt="홍원배"
              width="180px"
              height="180px"
            />
          </div>
          <ContentIntroduce>
            <h3>Intorduction</h3>
            <ul>
              <li>안녕하세요! 신입 프론트엔드 개발자 홍원배입니다</li>
              <li>풀스택 개발자를 꿈꾸며, 매일 공부하고 있습니다</li>
              <li>
                무엇보다도 꾸준함의 가치를 믿고 학습하며 기술 노션페이지를
                기록하고 있습니다
              </li>
              <li>Clean Code에 대한 고민을 생활화 합니다</li>
              <li>함께 하는 성장에 관심이 많습니다</li>
            </ul>

            <h3>Contact</h3>
            <ul>
              <li>Email | shongs27@gmail.com</li>
              <li>
                <LinkPage href="https://github.com/shongs27" target="_blank">
                  Github
                </LinkPage>
                <span> | https://github.com/shongs27</span>
              </li>
              <li>
                <LinkPage href="https://shongs27.kr" target="_blank">
                  Blog
                </LinkPage>
                <span> | 홍원배의 기술블로그</span>
              </li>
            </ul>
          </ContentIntroduce>
        </Content>
      </Category>

      <Category className="skills">
        <h2>💻 Skills</h2>
        <div style={{ paddingTop: '10px', paddingLeft: '20px' }}>
          <h3>Fronted</h3>
          <ul>
            <li>Html, CSS, Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
          </ul>
        </div>
        &nbsp;
        <div style={{ paddingBottom: '10px', paddingLeft: '20px' }}>
          <h3>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Amazon Clould</li>
          </ul>
        </div>
      </Category>

      <Category className="projects">
        <h2>👨🏼‍💻 Projects</h2>

        <Container>
          <h3>개인 블로그</h3>
          <p>2022.01 ~</p>
          <ul>
            <li>TDD 개발방법론을 적용한 기술블로그</li>
            <li>notion을 통해 정리된 글을 포스트로 렌더링</li>
            <li>React, redux, mongoose, AWS 적용</li>
          </ul>
          <p>
            지속적인 블로그 관리를 위해 TDD를 적용합니다 리팩토링을 통해 더 나은
            UI와 학습한 글을 정리해서 쉽게 서술함으로서 다시 한번 학습하고
            오픈소스에 기여함을 목적으로 합니다
          </p>
        </Container>
      </Category>

      <Category className="education">
        <h2>👨‍🏫 Education</h2>
        <Container>
          <h3>코드숨 리액트 6기</h3>
          <p>2021.12</p>
          <p>코드숨 교육기관 리액트 TDD 개발방법론</p>
          <ul>
            <li>3개월 과정</li>
            <li>리팩토링을 통한 리액트 실습</li>
            <li>테스트 개발방법론 학습</li>
            <li>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#bdc3c7',
                  fontStyle: 'italic',
                }}
                href="https://www.codesoom.com/"
              >
                코드숨 홈페이지 링크
              </a>
            </li>
          </ul>
          <p>
            리팩토링을 통한 코드 개선과 서로 소통할 수 있는 코드의 중요성을 배운
            소중한 경험이었습니다. 리액트의 기본적인 원리를 바탕으로 작은
            프로젝트들을 거듭하며 TDD 개발 방법을 익혔습니다. 무엇보다 나만이
            이해하는 코드가 아닌 쉽고, 편하고, 명확하게 이해할 수 있는 코드에
            대해서 고민하는 계기였습니다.
          </p>
        </Container>

        <Container>
          <h3>인텔과 함께하는 AI</h3>
          <p>2020.01</p>
          <p>
            인텔에서 주관하는 인공지능 관련 교육과 드론을 이용한 자동주행 실습
          </p>
          <ul>
            <li>1개월 교육</li>
          </ul>
        </Container>

        <Container>
          <h3>빅데이터 청년인재</h3>
          <p>2019.06</p>
          <p>과학통신부 주관 빅데이터 청년인재</p>
          <ul>
            <li>3개월 교육과정</li>
            <li>1개월 집체교육 + 2개월 프로젝트</li>
            <b>미세먼지 농도에 따른 기상 예측 프로젝트 2등</b>
          </ul>
          <p>
            협업과 도메인지식의 중요성에 대해 깨닫고 프로그래밍 프로젝트를
            전체적으로 관망할 수 있는 강력한 첫 경험이었습니다. 프로젝트 초반,
            팀원과의 부족했던 소통으로 인해 머신러닝의 학습모델에 적용이 되지
            않는 정제 과정이 필요 없는 변수를 가공하며 많은 시간을 소모하게
            되었는데요, 그 후 프로젝트를 리빌딩하면서 서로의 업무에 대한 관심과
            대화를 통한 협동의 중요성을 확인하고 개선시켜 빠르게 시간을 절약해
            나갔고 협동을 통해 학습모델을 위한 적절한 변수를 선정하여 예측율을
            70퍼센트까지 끌어올릴 수 있었습니다. 협업과 서로를 위한 피드백이
            중요하다는 것을 깨닫는 경험이었습니다.
          </p>
        </Container>
      </Category>

      <Category className="certification">
        <h2>📌 자격증</h2>
        <CertificationContainer>
          <Container>
            <h3>토익스피킹 LV6</h3>
            <p>주관: ETS / 취득일 : 2020.09</p>
          </Container>
          <Container>
            <h3>한국사 1급</h3>
            <p>주관: 국사편찬위원회 / 취득일 : 2019.06</p>
          </Container>
          <Container>
            <h3>DSAC 3등급</h3>
            <p>데이터사이언티스트 능력검정</p>
            <p>주관: 한국생산성본부 / 취득일 : 2019.05</p>
          </Container>
          <Container>
            <h3>정보처리기능사</h3>
            &nbsp;
            <p>주관: 한국산업인력공단 </p>
          </Container>
        </CertificationContainer>
      </Category>

      <Category className="mottos">
        <h2>💬 Mottos</h2>
        <MottosList>
          <li>매일 하는 학습</li>
          <li>'척' 하지말자</li>
          <li>메타인지를 통해 분명하고 명확하게 학습하자</li>
        </MottosList>
      </Category>

      <Addon>
        <ItemMenu clicked={openMenu}>
          <ResumeMenu />
        </ItemMenu>

        <ListMenu
          type="button"
          title="도움메뉴 열고 닫기"
          onClick={handleClick}
          clicked={openMenu}
        >
          <FontAwesomeIcon icon={faCircleQuestion} size="4x" />
        </ListMenu>
      </Addon>
    </>
  );
}
