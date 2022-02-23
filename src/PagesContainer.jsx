import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
// import ComputerPage from './pages/ComputerPage';
// import AlgorithmPage from './pages/AlgorithmPage';
// import SomethingPage from './pages/SomethingPage';
import PageDetailContainer from './components/PageDetailContainer';
import SearchPage from './pages/SearchPage';

import HeaderBar from './commons/top/HeaderBar';
import Title from './commons/top/Title';
import Nav from './commons/top/Nav';

import Footer from './commons/aside/FooterContainer';

import styled from '@emotion/styled';

const Container = styled.div({
  margin: '2em auto',
  width: '50%',
  minHeight: '70vh',
});

export default function PagesContainer() {
  return (
    <>
      <HeaderBar />
      <Title />
      <Nav />
      <Container>
        <Routes>
          {/* route /일 경우 메인페이지 변경할 것 */}
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/js" element={<JsPage />} />
          <Route path="/react" element={<ReactPage />} />

          <Route path="/:category/:id" element={<PageDetailContainer />} />
          <Route path="/search" element={<SearchPage />} />

          <Route path="*" element={<div>Not Found Page</div>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
