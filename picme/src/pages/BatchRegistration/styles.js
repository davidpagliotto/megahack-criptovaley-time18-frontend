import styled from 'styled-components';

export const BatchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #839ec1;
  padding: 10px;
`;
export const BatchContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  margin: 0 auto;
`;

export const BatchTitleContainer = styled.div`
  padding: 10px 0;
`;

export const BatchTitleContainerItem = styled.h1`
  font-size: 2rem;
  color: #576f8f;
`;

export const Select = styled.select`
  height: 2rem;
  margin-bottom: 1rem;
`;

export const SelectOption = styled.option`
  height: 2rem;
  font-size: 1rem;
`;

export const Input = styled.input`
  border-radius: 3px;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0 5px;
`;

export const ButtonConfirm = styled.button`
  width: 10rem;
  height: 3rem;
  /* padding: 1rem 5rem; */
  align-self: right;
  border: 0;
  background: #008cff;
  color: #fff;
  border-radius: 5px;
`;
