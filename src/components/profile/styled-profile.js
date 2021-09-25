import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfilePage = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1108px;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  background: var(--bg-color-primary);
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
`;

export const Title = styled.h1`
  font-family: 'Press Start 2P', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
  padding: 0;
  margin: 8px 0 16px 0;
`;

export const TabsList = styled.ul`
  display: flex;
  box-shadow: inset 0 -1px 0 #1f1f1f;
`;

export const ButtonText = styled.p`
  padding: 2px 0 0 12px;
  margin: 0;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  align-self: flex-end;
`;

export const Sidebar = styled.div`
  background-color: var(--bg-color-secondary);
  width: 25%;
  margin: 0 16px;
  padding: 16px;
  font-weight: bold;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
