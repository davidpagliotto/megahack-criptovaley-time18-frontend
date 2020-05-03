import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 10px;
  background: #576f8e;
`;

export const HeaderContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  padding: 1rem;
`;
