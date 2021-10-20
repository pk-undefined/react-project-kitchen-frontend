import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUserInfo = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content min-content;
  grid-template-rows: repeat(2, min-content);
  column-gap: 8px;
  align-items: center;
  width: ${(props) => (!props.isNotFullWidth && '100%')};
`;

export const UserAvatar = styled(Link)`
  width: 40px;
  height: 40px;
  grid-column: 1;
  grid-row: 1/3;
  transition: opacity 0.5s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const AuthorLink = styled(Link)`
  font-family: "Consolas", Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #ebebeb;
  grid-column: 2;
  grid-row: 1;
  transition: opacity 0.5s linear;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const PublicationDate = styled.span`
  font-family: "Consolas", Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 1.1;
  color: #b8b8b8;
  grid-column: 2;
  grid-row: 2;
`;
