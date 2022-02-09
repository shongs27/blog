import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
import ComputerPage from './pages/ComputerPage';
import AlgorithmPage from './pages/AlgorithmPage';
import SomethingPage from './pages/SomethingPage';

import TopContainer from '../top/TopContainer';
import Footer from '../Footer/FooterContainer';

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
            <Route path="/" element={<MainPage />} />
            <Route path="/js" element={<JsPage />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/computer" element={<ComputerPage />} />
            <Route path="/algorithm" element={<AlgorithmPage />} />
            <Route path="/something" element={<SomethingPage />} />

            <Route path="*" element={<MainPage />} />
          </Routes>
        </MiddleContainer>
      </Container>
      <Footer />
    </>
  );
}
