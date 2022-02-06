import TopContainer from './top/TopContainer';

import MainPage from './main/pages/MainPage';

import { Routes, Route } from 'react-router-dom';
import JsPage from './main/pages/JsPage';
import ReactPage from './main/pages/ReactPage';
import ComputerPage from './main/pages/ComputerPage';
import AlgorithmPage from './main/pages/AlgorithmPage';
import SomethingPage from './main/pages/SomethingPage';

export default function App() {
  return (
    <>
      <TopContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/js" element={<JsPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/algorithm" element={<AlgorithmPage />} />
        <Route path="/something" element={<SomethingPage />} />

        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}
