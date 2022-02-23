import { useSelector } from 'react-redux';
import PageContents from '../components/PageContents';

export default function SearchPage() {
  const { searchTarget } = useSelector((state) => state.search);

  return <PageContents articleTitle="검색 결과" pageContents={searchTarget} />;
}
