import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { getPostDetail } from '../actions';

import PostDetail from './PostDetail';

export default function PostDetailContainer() {
  const dispatch = useDispatch();
  const params = useParams();
  const postDetail = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetail(params));
  }, [params]);

  return <PostDetail postDetail={postDetail} />;
}
