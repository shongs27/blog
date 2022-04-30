import PagesContainer from './PagesContainer';

import { useDispatch } from 'react-redux';
import {
  changeScrollY,
  getGoogleAnalytics,
  setAccessToken,
  setLikePost,
} from './actions';

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

  function handleScroll() {
    const element = document.querySelector('html');
    const body = document.querySelector('body');
    //
    const scroll =
      ((element['scrollTop'] || body['scrollTop']) /
        ((element['scrollHeight'] || body['scrollHeight']) -
          element.clientHeight)) *
      100;

    dispatch(changeScrollY(scroll));
  }

  useEffect(() => {
    dispatch(getGoogleAnalytics());

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <PagesContainer />;
}
