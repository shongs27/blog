import styled from '@emotion/styled';

export const LinkPage = styled.a({
  textDecoration: 'none',
  color: '#bdc3c7',
  fontStyle: 'italic',
});

export const PostContainer = styled.div({
  margin: '2em auto',
  minHeight: '70vh',

  width: '95%',

  //태블릿과 컴퓨터 화면
  '@media only screen and (min-width: 768px)': {
    //933px
    width: '60%',
  },
});

export const PageContainer = styled.div({
  width: '90%',
  minHeight: '70vh',
  margin: '2em auto',

  '@media only screen and (min-width: 768px)': {
    width: '50%',
    paddingLeft: '100px',
  },
});

export const List = styled.ul({
  padding: '0',
  margin: '0',
});

export const Item = styled.li({
  //likes icon을 absolute로 붙이기 위해서
  position: 'relative',

  listStyle: 'none',
  borderBottom: '1px solid #e6e6e6',

  padding: '8px 0',

  '& a': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
    fontSize: '0.875em',
    lineHeight: '1.5714',
    whiteSpace: 'nowrap',
    color: '#95a5a6',
  },
});
