import PagesContainer from './PagesContainer';

import { useDispatch } from 'react-redux';
import { getGoogleAnalytics, setAccessToken } from './actions';

import { getItem } from './services/storage';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const token = getItem('accessToken');
  const userId = getItem('userId');

  if (token) {
    dispatch(setAccessToken(token, userId));
  }

  useEffect(() => {
    dispatch(getGoogleAnalytics());
  }, []);

  return <PagesContainer />;
}
