import { fetchPageContents, fetchPageDetail } from './services/api';

export function getPageContents(category) {
  return async (dispatch) => {
    const pageContents = await fetchPageContents(category);
    // result를 그대로 return하고 끝내도 되지만,
    // useSelector로 데이터 변화 감지하려면 set하는 dispatch로 연결하는 것이 낫다
    dispatch(setPageContents(category, pageContents));
  };
}

export function setPageContents(pageName, pageContents) {
  return {
    type: 'setPageContents',
    payload: { pageName, pageContents },
  };
}

export function getPageDetail(params) {
  return async (dispatch, getState) => {
    const { category, id } = params;

    const pageDetail = await fetchPageDetail(category, id);

    dispatch(setPageDetail(pageDetail));
  };
}

export function setPageDetail(pageDetail) {
  return {
    type: 'setPageDetail',
    payload: { pageDetail },
  };
}
