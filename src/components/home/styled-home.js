import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 32px 0;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Main = styled.main`
  width: 75%;
  margin: 0 16px;
`;

export const Sidebar = styled.div`
  background-color: var(--bg-color-secondary);
  width: 25%;
  margin: 0 16px;
  padding: 16px;
  font-weight: bold;
`;
