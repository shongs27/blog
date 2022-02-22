import styled from '@emotion/styled';

import RecentPosts from './sections/RecentPosts';
import PopularPosts from './sections/PopularPosts';
import FooterBar from './FooterBar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFooterPosts } from '../../actions';
import ExtraSection from './sections/ExtraSection';

const Container = styled.div({
  borderTop: '1px solid rgb(230, 230, 230)',

  marginTop: '60px',
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

  useEffect(() => {
    dispatch(getFooterPosts());
  }, []);

  return (
    <>
      <Container>
        <div>
          <RecentPosts recentPosts={recentPosts} />
          <PopularPosts popularPosts={popularPosts} />
          <ExtraSection />
        </div>
      </Container>
      <FooterBar popularPosts={popularPosts} />
    </>
  );
}
