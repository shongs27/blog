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
});

const SectionsContainer = styled.div({
  width: '90%',
  margin: '0 auto',
  minHeight: '300px',
  padding: '57px 34px 24px',
  // height: 'calc(100% - 80px)',

  // '@media screen and (max-width: 1199px)': {
  //   paddingLeft: '34px',
  //   paddingRight: '34px',
  // },
});

export default function AsideSectionsContainer() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.posts.recentPosts);
  const popularPosts = useSelector((state) => state.posts.popularPosts);
  const searchField = useSelector((state) => state.search.searchField);
  const activeUsers = useSelector((state) => state.GA);

  useEffect(() => {
    dispatch(getFooterPosts());
  }, []);

  function handleChange(searchField) {
    dispatch(changeSearchField(searchField));
  }

  function handleSubmit() {
    dispatch(getSearchField());
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <SectionsContainer>
        <RecentPosts recentPosts={recentPosts} />
        <PopularPosts popularPosts={popularPosts} />
        <ExtraSection
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchField={searchField}
          activeUsers={activeUsers}
        />
      </SectionsContainer>
      <FooterBar />
    </Container>
  );
}
