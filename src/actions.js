import { fetchPageContents } from './services/api';

export function getPageContents(pageName) {
  return async (dispatch, getState) => {
    const result = await fetchPageContents(pageName);
    // result를 그대로 return하고 끝내도 되지만,
    // useSelector로 데이터 변화 감지하려면 set하는 dispatch로 연결하는 것이 낫다
    dispatch(setPageContents(pageName, result));
  };
}

export function setPageContents(pageName, pageContents) {
  return {
    type: 'setPageContents',
    payload: { pageName, pageContents },
  };
}
