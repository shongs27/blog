import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const TH = styled.th({
  padding: '.5em 1em',

  borderBottom: '2px solid #29367c',
});

const TD = styled.td(({ leftAlign = false }) => ({
  textAlign: leftAlign ? 'initial' : 'center',
  height: '2.5em',
  verticalAlign: 'middle',

  borderTop: '2px solid #eee',

  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default function ThreadList({ guestBoard, handleWriting }) {
  return (
    <>
      <div style={{ marginTop: '4em', padding: '10px', minHeight: '5em' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            borderTop: '2px solid #29367c',
            borderBottom: '2px solid #29367c',
          }}
        >
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '40%' }} />
            <col style={{ width: '15%' }} />
            <col span={{ width: '15%' }} />
          </colgroup>

          <thead>
            <tr>
              <TH scope="col">번호</TH>
              <TH scope="col">제목</TH>
              <TH scope="col">글쓴이</TH>
              <TH scope="col">작성일</TH>
            </tr>
          </thead>
          <tbody>
            {guestBoard.map(({ id, title, name, createdAt }) => (
              <tr key={id}>
                <TD>{id}</TD>
                <TD leftAlign={true}>
                  <Link to={`/board/${id}`}>{title}</Link>
                </TD>
                <TD>{name}</TD>
                <TD>{createdAt}</TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button
          style={{ marginRight: '2em' }}
          type="button"
          onClick={handleWriting}
        >
          글쓰기
        </button>
      </div>
    </>
  );
}
