import { useEffect } from 'react';

import PageField from '../PageField';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../../actions';

function MainPage() {
  const dispatch = useDispatch();
  //useSelector는 언제 변하는가?
  const mainPageContents = useSelector((state) => state.pages.main);

  useEffect(() => {
    dispatch(getPageContents('main'));
  }, []);

  return <PageField articleTitle="전체글" pageContents={mainPageContents} />;
}

export default MainPage;
