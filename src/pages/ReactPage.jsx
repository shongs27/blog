import { useEffect } from 'react';

import PageContents from '../components/PageContents';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function ReactPage() {
  const dispatch = useDispatch();
  const ReactPageContents = useSelector((state) => state.pages.react);

  useEffect(() => {
    dispatch(getPageContents('react'));
  }, []);

  return <PageContents articleTitle="React" pageContents={ReactPageContents} />;
}
