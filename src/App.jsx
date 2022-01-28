import TopContainer from './Top/TopContainer';

import Header from './Top/Header';
import Title from './Top/Title';
import Nav from './Top/Nav';
import Main from './Middle/Main';
import Footer from './Bottom/Footer';

export default function App() {
  return (
    <>
      <TopContainer />
      <div>
        {/* 라우터가 될 스위치 부분 */}
        <Header />
        <Title />
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}
