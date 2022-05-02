import { useEffect } from 'react';

import PagesPosts from '../components/PagesPosts';

import { useSelector, useDispatch } from 'react-redux';
import { getPagesPosts } from '@actions';

import { navListPageName } from '@fixture/nav';

export default function ThingsPage() {
  const dispatch = useDispatch();
  const thingsPosts = useSelector((state) => state.posts.things);

  useEffect(() => {
    dispatch(getPagesPosts('things'));
  }, []);

  return (
    <PagesPosts articleTitle={navListPageName[5]} pagesPosts={thingsPosts} />
  );
}
