import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import { getPageDetail } from '../actions';

import PageDetail from './PageDetail';

export default function PageDetailContainer() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getPageDetail(params));
  }, [params]);

  const pageDetail = useSelector((state) => state.page);

  return <PageDetail pageDetail={pageDetail} />;
}
