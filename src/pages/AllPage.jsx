import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '@actions';

import { navListPageName } from '@fixture/nav';

export default function AllPage() {
  const dispatch = useDispatch();
  const allpagePosts = useSelector((state) => state.posts.all);

  useEffect(() => {
    dispatch(getPagesPosts('all'));
  }, []);

  return (
    <PagesPosts articleTitle={navListPageName[0]} pagesPosts={allpagePosts} />
  );
}
