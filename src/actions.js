import { message } from 'antd';
import {
  fetchPagesPosts,
  fetchPostDetail,
  fetchPopularPosts,
  fetchRecentPosts,
  fetchSearchField,
  postArticle,
  postLogin,
} from './services/api';
import { setItem, removeItem } from './services/storage';

export function setPagesPosts(category, pagePosts) {
  return {
    type: 'setPagesPosts',
    payload: { category, pagePosts },
  };
}

export function getPagesPosts(category) {
  return async (dispatch) => {
    const { trial, posts } = await fetchPagesPosts(category);
    // 결과값을 그대로 리턴해서 보여줘도 되지만
    // useSelector로 데이터 변화 감지하려면 set하는 dispatch로 연결하는 것이 낫다
    dispatch(setPagesPosts(category, posts));
  };
}

export function setPostDetail(postDetail) {
  return {
    type: 'setPostDetail',
    payload: { postDetail },
  };
}

export function getPostDetail(params) {
  return async (dispatch, getState) => {
    const { category, id } = params;

    const { trial, post } = await fetchPostDetail(category, id);

    if (trial) {
      dispatch(setPostDetail(post));
    }
  };
}

export function setRecentPosts(recentPosts) {
  return {
    type: 'setRecentPosts',
    payload: { recentPosts },
  };
}

export function setPopularPosts(popularPosts) {
  return {
    type: 'setPopularPosts',
    payload: { popularPosts },
  };
}

export function getFooterPosts() {
  return async (dispatch) => {
    try {
      const [recentPosts, popularPosts] = await Promise.all([
        fetchRecentPosts(),
        fetchPopularPosts(),
      ]);

      dispatch(setRecentPosts(recentPosts));
      dispatch(setPopularPosts(popularPosts));
    } catch (error) {
      console.log('Footer 포스트 받아오기 실패');
      console.log(error);
    }
  };
}

export function changeSearchField(searchField) {
  return {
    type: 'changeSearchField',
    payload: { searchField },
  };
}

export function getSearchField() {
  return async (dispatch, getState) => {
    const {
      search: { searchField },
    } = getState();
    const searchedPosts = await fetchSearchField(searchField);

    if (searchedPosts.length) {
      dispatch(setSearchTarget(searchedPosts));
    } else {
      dispatch(setSearchTarget([searchedPosts]));
    }

    dispatch(changeSearchField(''));
  };
}

export function setSearchTarget(searchedPosts) {
  return {
    type: 'setSearchTarget',
    payload: { searchedPosts },
  };
}

export function reverseClicked() {
  return {
    type: 'reverseClicked',
  };
}

export function changeLoginField(name, value) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const {
      login: {
        loginField: { email, password },
      },
    } = getState();

    const { userId, accessToken } = await postLogin(email, password);

    if (accessToken) {
      setItem('accessToken', accessToken);
      setItem('userId', userId);
      dispatch(setAccessToken(accessToken, userId));
    } else {
      message.info('유저가 없거나 비밀번호가 틀렸습니다');
    }
  };
}

export function setAccessToken(accessToken, userId) {
  return {
    type: 'setAccessToken',
    payload: { userId, accessToken },
  };
}

export function logout() {
  removeItem('userId');
  removeItem('accessToken');
  return {
    type: 'logout',
  };
}

export function registerPost(form) {
  return async (dispatch, getState) => {
    const { trial, post } = await postArticle(form);

    if (trial) {
      message.info('글을 성공적으로 등록했습니다');
      getPagesPosts(post.category);
    } else {
      message.fail('글 올리는걸 실패했습니다');
    }
  };
}

export function changePostField(name, value) {
  return {
    type: 'changePostField',
    payload: { name, value },
  };
}
