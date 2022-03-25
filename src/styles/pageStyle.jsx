import styled from '@emotion/styled';

export const PostContainer = styled.div({
  '@media only screen and (min-width: 768px)': {
    margin: '2em auto',
    width: '933px',
    minHeight: '70vh',
  },
});

export const PageContainer = styled.div({
  '@media only screen and (min-width: 768px)': {
    margin: '2em auto',
    paddingLeft: '100px',
    width: '50%',
    minHeight: '70vh',
  },
});

export const List = styled.ul({
  padding: '0',
  margin: '0',
});

export const Item = styled.li({
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
