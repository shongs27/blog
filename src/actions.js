import { message } from 'antd';
import {
  fetchPagesPosts,
  fetchPostDetail,
  fetchPopularPosts,
  fetchRecentPosts,
  fetchSearchField,
  postArticle,
  postLogin,
  fetchGoogleAnalytics,
  patchLike,
  patchUnlike,
  fetchGuestBoard,
  postThread,
  postThreadLogin,
  fetchBoardThread,
  patchThread,
  putThread,
} from './services/api';
import { setItem, removeItem, getItem, isItem } from './services/storage';

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

    const { trial, posts } = await fetchSearchField(searchField);

    if (trial) {
      dispatch(setSearchTarget(posts));
    } else {
      dispatch(setSearchTarget(''));
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
      dispatch(getPagesPosts(post.category));
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

export function getGoogleAnalytics() {
  return async (dispatch) => {
    const { trial, activeUsers } = await fetchGoogleAnalytics();

    if (!trial) {
      return message.info('구글 애널리틱스 data를 가져올 수 없습니다');
    }

    dispatch(setGoogleAnalytics(activeUsers));
  };
}

export function setGoogleAnalytics(activeUsers) {
  return {
    type: 'setGoogleAnalytics',
    payload: { activeUsers },
  };
}

export function upLike(postId) {
  return async (dispatch) => {
    const { trial, post } = await patchLike(postId);

    if (!trial) {
      return message.info('모종의 이유로 좋아요가 작동하지 않아요');
    }

    dispatch(setPostDetail(post));

    const item = JSON.parse(getItem('likePostIDs'));
    if (item) {
      if (!isItem('likePostIDs', postId)) {
        setItem('likePostIDs', JSON.stringify([...item, postId]));
        dispatch(setLikePost([...item, postId]));
        return;
      }
    }

    setItem('likePostIDs', JSON.stringify([postId]));
    dispatch(setLikePost([postId]));
  };
}

export function unLike(postId) {
  return async (dispatch) => {
    const { trial, post } = await patchUnlike(postId);

    if (!trial) {
      return message.info('모종의 이유로 좋아요 취소가 작동하지 않아요');
    }

    dispatch(setPostDetail(post));

    const filtered = JSON.parse(getItem('likePostIDs')).filter(
      (value) => value !== postId
    );
    if (filtered.length) {
      setItem('likePostIDs', JSON.stringify([...filtered]));
      dispatch(setLikePost([...filtered]));
    } else {
      removeItem('likePostIDs');
      dispatch(setLikePost());
    }
  };
}

export function setLikePost(likePost = []) {
  return {
    type: 'setLikePost',
    payload: { likePost },
  };
}

//////////////
// 방명록
//////////////

export function setGuestBoard(guestBoard) {
  return {
    type: 'setGuestBoard',
    payload: { guestBoard },
  };
}

export function getGuestBoard() {
  return async (dispatch) => {
    const { trial, board } = await fetchGuestBoard();

    if (!trial) {
      message.info('서버에서 게시글들을 받아올 수 없습니다');
    }

    dispatch(setGuestBoard(board));
  };
}

export function setBoardThread(thread) {
  return {
    type: 'setBoardThread',
    payload: { thread },
  };
}

export function getBoardThread(threadId) {
  return async (dispatch) => {
    const { trial, thread } = await fetchBoardThread(threadId);

    if (!trial) {
      message.info('서버에서 게시글을 받아올 수 없습니다');
    }

    dispatch(setBoardThread(thread));
  };
}

export function registerThreadField() {
  return async (dispatch, getState) => {
    const {
      guestBoard: { threadField },
    } = getState();
    const { trial, board } = await postThread(threadField);

    if (!trial) {
      return message.info('게시글 등록에 실패했습니다');
    }

    dispatch(setGuestBoard(board));
  };
}

export function changeThread() {
  return async (dispatch, getState) => {
    const {
      guestBoard: { threadField },
    } = getState();
    const { trial } = await patchThread(threadField);

    if (!trial) {
      return message.info('게시글 등록에 실패했습니다');
    }

    dispatch(getGuestBoard());
  };
}

export function changeThreadField(name, value) {
  return {
    type: 'changeThreadField',
    payload: { name, value },
  };
}

export function setThreadField(thread) {
  return {
    type: 'setThreadField',
    payload: { thread },
  };
}

export function changeThreadLoginField(password) {
  return {
    type: 'changeThreadLoginField',
    payload: { password },
  };
}

export function requestThreadLogin(loginState, id) {
  return async (dispatch, getState) => {
    const {
      guestBoard: {
        loginField: { password },
      },
    } = getState();

    const { trial, thread } = await postThreadLogin(loginState, id, password);

    if (!trial) {
      return message.info('게시글 등록에 실패했습니다');
    }

    dispatch(getGuestBoard());

    if (loginState === 'modify') {
      dispatch(setThreadField(thread));
      dispatch(changeFormMode('modify'));
      message.info('게시글을 성공적으로 수정했습니다');
    } else if (loginState === 'eliminate') {
      message.info('게시글을 성공적으로 삭제했습니다');
    }
  };
}

export function changeFormMode(formMode) {
  return {
    type: 'changeFormMode',
    payload: { formMode },
  };
}
