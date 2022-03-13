import styled from '@emotion/styled';

import RecentPosts from './sections/RecentPosts';
import PopularPosts from './sections/PopularPosts';
import FooterBar from './FooterBar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  changeSearchField,
  getFooterPosts,
  getSearchField,
} from '../../actions';
import ExtraSection from './sections/ExtraSection';

const Container = styled.div({
  borderTop: '1px solid rgb(230, 230, 230)',

  width: '80%',
  margin: '60px auto 0',
  minHeight: '300px',
  padding: '57px 34px 24px',
  // height: 'calc(100% - 80px)',

  // '@media screen and (max-width: 1199px)': {
  //   paddingLeft: '34px',
  //   paddingRight: '34px',
  // },

  // '& div': {
  // overflow: 'hidden',
  // maxWidth: '1200px',
  // margin: '0 auto',
  // },
});

export default function FooterContainer() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.posts.recentPosts);
  const popularPosts = useSelector((state) => state.posts.popularPosts);
  const searchField = useSelector((state) => state.search.searchField);

  useEffect(() => {
    dispatch(getFooterPosts());
  }, []);

  function handleChange(searchField) {
    dispatch(changeSearchField(searchField));
  }

  function handleSubmit() {
    dispatch(getSearchField());
  }

  return (
    <>
      <Container>
        <div>
          <RecentPosts recentPosts={recentPosts} />
          <PopularPosts popularPosts={popularPosts} />
          <ExtraSection
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchField={searchField}
          />
        </div>
      </Container>
      <FooterBar popularPosts={popularPosts} />
    </>
  );
}
