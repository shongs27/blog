import PagesContainer from './PagesContainer';

import { useDispatch } from 'react-redux';
import { getGoogleAnalytics, setAccessToken, setLikePost } from './actions';

import { getItem } from './services/storage';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const token = getItem('accessToken');
  const userId = getItem('userId');
  const likePost = JSON.parse(getItem('likePostIDs'));

  if (token) {
    dispatch(setAccessToken(token, userId));
  }

  if (likePost) {
    dispatch(setLikePost(likePost));
  }

  useEffect(() => {
    dispatch(getGoogleAnalytics());
  }, []);

  return <PagesContainer />;
}
