import styled from '@emotion/styled';

export const Container = styled.div({
  width: '90%',
  margin: '0 auto',

  // minHeight: 'calc(100vh - 340px)',
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
