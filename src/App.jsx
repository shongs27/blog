import TopContainer from './top/TopContainer';

import MainPage from './main/MainPage';

import { Routes, Route } from 'react-router-dom';

function NotPage() {
  return <div>not페이지 입니다</div>;
}

export default function App() {
  return (
    <>
      <TopContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/not" element={<NotPage />} />
      </Routes>
    </>
  );
}
