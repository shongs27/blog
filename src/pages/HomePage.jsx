import { useEffect } from 'react';

import PageContents from '../components/PageContents';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const homePageContents = useSelector((state) => state.pages.home);

  useEffect(() => {
    dispatch(getPageContents('home'));
  }, []);

  console.log('홈페이지용', homePageContents);

  return <PageContents articleTitle="전체글" pageContents={homePageContents} />;
}
