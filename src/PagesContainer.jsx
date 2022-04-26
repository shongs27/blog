import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AllPage from './pages/AllPage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
import ComputerPage from './pages/ComputerPage';
import PostDetailContainer from './components/PostDetailContainer';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import Resume from './pages/Resume';
import GuestBoardPage from './pages/GuestBoardPage';
import GuestBoardDetailPage from './pages/GuestBoardDetailPage';
import GuestBoardModifyPage from './pages/GuestBoardModifyPage';

import HeaderBar from './commons/top/HeaderBar';
import Title from './commons/top/Title';
import Nav from './commons/top/Nav';

import AsideContainer from './commons/aside/AsideContainer';

import { PageContainer, PostContainer } from '@styles/pageStyle';

export default function PagesContainer() {
  return (
    <>
      <HeaderBar />
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/all"
          element={
            <PageContainer>
              <AllPage />
            </PageContainer>
          }
        ></Route>

        <Route
          path="/js"
          element={
            <PageContainer>
              <JsPage />
            </PageContainer>
          }
        />

        <Route
          path="/react"
          element={
            <PageContainer>
              <ReactPage />
            </PageContainer>
          }
        />

        <Route
          path="/computer"
          element={
            <PageContainer>
              <ComputerPage />
            </PageContainer>
          }
        />

        <Route
          path="/search"
          element={
            <PageContainer>
              <SearchPage />
            </PageContainer>
          }
        />

        <Route
          path="/me"
          element={
            <PostContainer>
              <Resume />
            </PostContainer>
          }
        />

        <Route
          path="/board"
          element={
            <PageContainer>
              <GuestBoardPage />
            </PageContainer>
          }
        />

        <Route
          path="/board/:id"
          element={
            <PageContainer>
              <GuestBoardDetailPage />
            </PageContainer>
          }
        />

        <Route
          path="/board/:id/fix"
          element={
            <PageContainer>
              <GuestBoardModifyPage />
            </PageContainer>
          }
        />

        <Route
          path="/login"
          element={
            <PageContainer>
              <LoginPage />
            </PageContainer>
          }
        />
        <Route
          path="/:category/:id"
          element={
            <PostContainer>
              <PostDetailContainer />
            </PostContainer>
          }
        />

        <Route
          path="*"
          element={
            <PageContainer>
              <div>준비중인 페이지 입니다</div>
            </PageContainer>
          }
        />
      </Routes>
      <AsideContainer />
    </>
  );
}
