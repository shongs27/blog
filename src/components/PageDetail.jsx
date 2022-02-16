export default function PageDetail({ pageDetail }) {
  const { id, title, content } = pageDetail;
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{content}</div>
    </>
  );
}
