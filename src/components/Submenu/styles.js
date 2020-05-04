import styled from 'styled-components';

export const SubmenuWrapper = styled.div`
  width: 100%;

  padding: 3px;
`;

export const SubmenuContent = styled.div`
  display: flex;
  justify-content: center;
  background: #576f8f;
  border-radius: 3px;
`;

export const SubmenuItem = styled.span`
  color: #fff;
  font-weight: bold;
  padding: 10px 1rem;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 3px;
  transition: all 0.7s;

  &:hover {
    background: #415673;
  }
`;
