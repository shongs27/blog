import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '@actions';

import { navListPageName } from '@fixture/nav';

export default function TILPage() {
  const dispatch = useDispatch();
  const TILPosts = useSelector((state) => state.posts.TIL);

  useEffect(() => {
    dispatch(getPagesPosts('TIL'));
  }, []);

  return <PagesPosts articleTitle={navListPageName[5]} pagesPosts={TILPosts} />;
}
