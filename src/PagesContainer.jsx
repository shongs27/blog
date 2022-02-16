import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
// import ComputerPage from './pages/ComputerPage';
// import AlgorithmPage from './pages/AlgorithmPage';
// import SomethingPage from './pages/SomethingPage';
import PageDetailContainer from './components/PageDetailContainer';

import TopContainer from './commons/top/TopContainer';
import Footer from './commons/footer/FooterContainer';

import styled from '@emotion/styled';

const Container = styled.div({
  fontFamily: 'Noto Sans KR',
  margin: '0 auto',
  width: '90%',
});

const MiddleContainer = styled.div({
  width: '60%',
  margin: '0 auto',
});

export default function PagesContainer() {
  return (
    <>
      <Container>
        <TopContainer />
        <MiddleContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/js" element={<JsPage />} />
            <Route path="/react" element={<ReactPage />} />

            <Route path="/:category/:id" element={<PageDetailContainer />} />

            {/* <Route path="/computer" element={<ComputerPage />} />
            <Route path="/algorithm" element={<AlgorithmPage />} />
            <Route path="/something" element={<SomethingPage />} /> */}

            <Route path="*" element={<div>고장났어요</div>} />
          </Routes>
        </MiddleContainer>
      </Container>
      <Footer />
    </>
  );
}
