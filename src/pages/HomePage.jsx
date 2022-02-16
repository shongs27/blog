import { useEffect } from 'react';

import PageContents from '../components/PageContents';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function HomePage() {
  const dispatch = useDispatch();
  //useSelector는 언제 변하는가?
  const homePageContents = useSelector((state) => state.pages.home);

  useEffect(() => {
    dispatch(getPageContents('home'));
  }, []);

  return <PageContents articleTitle="전체글" pageContents={homePageContents} />;
}
