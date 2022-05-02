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

  '&:hover': {
    cursor: 'pointer',
  },
});

export default function PostDetail({
  postDetail,
  likes,
  likePost = [],
  handleClick,
}) {
  const { _id, title, description, category, content, images } = postDetail;

  const likedPost = likePost.some((post) => post === _id);

  return (
    <>
      <MarkdownRender markdown={content} images={images} />
      <Likes onClick={() => handleClick(_id)}>
        {likedPost ? (
          <FontAwesomeIcon icon={faHeartCircleCheck} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
        <span>{likes}</span>
      </Likes>
    </>
  );
}
