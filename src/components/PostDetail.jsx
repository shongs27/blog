import MarkdownRender from './MarkdownRender';

export default function PostDetail({ postDetail }) {
  const { _id, writer, title, description, category, content, likes } =
    postDetail;
  return (
    <>
      <MarkdownRender markdown={content} />
      <div>{likes}</div>
    </>
  );
}
