import {
  fetchPageContents,
  fetchPageDetail,
  fetchPopularPosts,
  fetchRecentPosts,
  fetchSearchTarget,
  postArticle,
  postLogin,
} from './services/api';

export function setPageContents(pageName, pageContents) {
  return {
    type: 'setPageContents',
    payload: { pageName, pageContents },
  };
}

export function getPageContents(category) {
  return async (dispatch) => {
    const pageContents = await fetchPageContents(category);
    // result를 그대로 return하고 끝내도 되지만,
    // useSelector로 데이터 변화 감지하려면 set하는 dispatch로 연결하는 것이 낫다
    dispatch(setPageContents(category, pageContents));
  };
}

export function setPageDetail(pageDetail) {
  return {
    type: 'setPageDetail',
    payload: { pageDetail },
  };
}

export function getPageDetail(params) {
  return async (dispatch, getState) => {
    const { category, id } = params;

    const pageDetail = await fetchPageDetail(category, id);

    dispatch(setPageDetail(pageDetail));
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

export function getSearchTarget() {
  return async (dispatch, getState) => {
    const {
      search: { searchField },
    } = getState();
    const searchTarget = await fetchSearchTarget(searchField);

    dispatch(setSearchTarget(searchTarget));
    dispatch(changeSearchField(''));
  };
}

export function setSearchTarget(searchTarget) {
  return {
    type: 'setSearchTarget',
    payload: { searchTarget },
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

    const accessToken = await postLogin(email, password);
    localStorage.setItem('blogToken', accessToken);
    dispatch(setAccessToken(accessToken));
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function logout() {
  localStorage.removeItem('blogToken');
  return {
    type: 'logout',
  };
}

export function registerArticle(formData) {
  return async (dispatch, getState) => {
    const result = await postArticle(formData);
  };
}
