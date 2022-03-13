import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '../actions';

export default function ReactPage() {
  const dispatch = useDispatch();
  const reactpagePosts = useSelector((state) => state.posts.react);

  useEffect(() => {
    dispatch(getPagesPosts('react'));
  }, []);

  return <PagesPosts articleTitle="React" pagesPosts={reactpagePosts} />;
}
