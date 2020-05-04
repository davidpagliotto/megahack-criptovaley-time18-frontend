import styled from 'styled-components';

export const BatchWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
export const BatchContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const BatchTitleContainer = styled.div`
  padding: 10px 0;
`;

export const BatchTitleContainerItem = styled.h1`
  font-size: 1.5rem;
  color: #576f8f;
`;

export const Select = styled.select`
  height: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #adafb4;
  margin-right: 10px;
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
  border: 1px solid #adafb4;
`;

export const ActionsPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PageAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonAddItem = styled.button`
  width: 2rem;
  height: 2rem;
  border: 0;
  background: #11c43b;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonConfirm = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: 0;
  background: #009be5;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 5px;
`;
