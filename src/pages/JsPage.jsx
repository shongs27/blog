import { useEffect } from 'react';

import PageContents from '../components/PageContents';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function JsPage() {
  const dispatch = useDispatch();

  const jsPageContents = useSelector((state) => state.pages.js);

  useEffect(() => {
    dispatch(getPageContents('js'));
  }, []);

  return <PageContents articleTitle="JS" pageContents={jsPageContents} />;
}
