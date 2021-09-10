import styled from 'styled-components';
import like from '../../../images/like.svg';
import likeActive from '../../../images/like-active.svg';

export const StyledLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Counter = styled.p`
  grid-column: 3;
  grid-row: 1/3;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 450;
  margin: 0 9px 0 0;
  padding: 0;
  display: ${(props) => (props.count > 0 ? 'block' : 'none')};
  color: ${(props) => (props.article.favorited ? '#ff0000' : '#f3f3f3')};
`;

export const LikeButton = styled.button`
  grid-column: 4;
  grid-row: 1/3;
  width: 20px;
  height: 18px;
  box-shadow: none;
  border: none;
  background: center/contain
    ${(props) => (props.article.favorited ? `url(${likeActive})` : `url(${like})`)}
    no-repeat transparent;
  transition: opacity 0.5s linear;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
