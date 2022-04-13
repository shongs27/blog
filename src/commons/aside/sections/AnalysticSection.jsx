import styled from '@emotion/styled';

const MonthUsers = styled.span({
  fontSize: '1.875em',
});

const NowUsers = styled.div({
  marginTop: '1em',
  padding: '8px 0',

  textAlign: 'center',
  color: '#b2b2b2',

  '& strong': {
    float: 'left',
    color: '#636e72',
  },
});

const YesterdayUsers = styled.div({
  textAlign: 'center',
  color: '#b2b2b2',

  '& strong': {
    float: 'left',
    color: '#636e72',
  },
});

export default function AnalysticSection({ activeUsers }) {
  const { realTimeUsers, yesterdayActiveUsers, monthActiveUsers } = activeUsers;
  return (
    <div>
      <h3>한 달 방문자</h3>
      <MonthUsers>{monthActiveUsers}</MonthUsers>
      <NowUsers>
        <strong>현재</strong>
        <span>{realTimeUsers} 명</span>
      </NowUsers>
      <YesterdayUsers>
        <strong>어제</strong>
        <span>{yesterdayActiveUsers} 명</span>
      </YesterdayUsers>
    </div>
  );
}
