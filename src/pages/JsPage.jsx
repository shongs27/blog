import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '../actions';

export default function JsPage() {
  const dispatch = useDispatch();

  const jspagePosts = useSelector((state) => state.posts.js);

  useEffect(() => {
    dispatch(getPagesPosts('js'));
  }, []);

  return <PagesPosts articleTitle="JS" pagesPosts={jspagePosts} />;
}
