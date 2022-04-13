import MarkdownRender from './MarkdownRender';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';

const Likes = styled.button({
  backgroundColor: 'white',
  fontSize: '1.4em',
  border: 'none',

  '& span': {
    marginLeft: '5px',
  },
});

export default function PostDetail({
  postDetail,
  likes,
  likePost = [],
  handleClick,
}) {
  const { _id, writer, title, description, category, content } = postDetail;

  const LikePostBoolean = likePost.some((post) => post === _id);
  return (
    <>
      <MarkdownRender markdown={content} />
      <Likes onClick={() => handleClick(_id)}>
        {LikePostBoolean ? (
          <FontAwesomeIcon icon={faHeartCircleCheck} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
        <span>{likes}</span>
      </Likes>
    </>
  );
}
