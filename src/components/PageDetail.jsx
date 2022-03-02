import MarkdownRender from './MarkdownRender';

export default function PageDetail({ pageDetail }) {
  const { id, title, content, markdown } = pageDetail;
  return (
    <>
      <div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <MarkdownRender markdown={markdown} />
    </>
  );
}
