import PostDetail from './PostDetail';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostDetail, upLike, unLike } from '@actions';

import { isItem } from '../services/storage';

export default function PostDetailContainer() {
  const dispatch = useDispatch();
  const params = useParams();

  const { postDetail, likes } = useSelector((state) => ({
    postDetail: state.post,
    likes: state.post.likes,
  }));
  const likePost = useSelector((state) => state.likePost);

  useEffect(() => {
    dispatch(getPostDetail(params));
    window.scrollTo(0, 0);
  }, [params]);

  function handleClick(postId) {
    if (isItem('likePostIDs', postId)) {
      return dispatch(unLike(postId));
    }

    return dispatch(upLike(postId));
  }

  return (
    <PostDetail
      postDetail={postDetail}
      likes={likes}
      likePost={likePost}
      handleClick={handleClick}
    />
  );
}
