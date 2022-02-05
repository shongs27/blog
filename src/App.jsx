import TopContainer from './Top/TopContainer';

import Main from './Middle/Main';
import Footer from './Bottom/Footer';

export default function App() {
  return (
    <>
      <TopContainer />
      <div>{/* 라우터가 될 스위치 부분 */}</div>
      <Main />
      <Footer />
    </>
  );
}
