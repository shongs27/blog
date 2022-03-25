import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '@actions';

import { navListPageName } from '@fixture/nav';

export default function ComputerPage() {
  const dispatch = useDispatch();
  const computerPosts = useSelector((state) => state.posts.computer);

  useEffect(() => {
    dispatch(getPagesPosts('computer'));
  }, []);

  return (
    <PagesPosts articleTitle={navListPageName[3]} pagesPosts={computerPosts} />
  );
}
