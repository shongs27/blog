import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '../actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const homepagePosts = useSelector((state) => state.posts.home);

  useEffect(() => {
    dispatch(getPagesPosts('home'));
  }, []);

  return <PagesPosts articleTitle="전체글" pagesPosts={homepagePosts} />;
}
