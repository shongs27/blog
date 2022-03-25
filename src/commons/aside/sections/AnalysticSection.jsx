export default function AnalysticSection({ dailyActiveUsers }) {
  const { todayActiveUser, yesterDayActiveUser, oneMonthActiveUser } =
    dailyActiveUsers;
  return (
    <div>
      <h3>전체 방문자</h3>
      <span>{oneMonthActiveUser}</span>
      <div className="today">
        <span>오늘</span>
        <span></span>
      </div>
      <div className="yesterday">
        <span>어제</span>
        <span>{yesterDayActiveUser}</span>
      </div>
    </div>
  );
}
