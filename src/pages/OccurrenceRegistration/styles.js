import styled from "styled-components";

export const BatchWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  font-size: 2rem;
  color: #576f8f;
`;

export const Select = styled.select`
  height: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #adafb4;
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

export const TextArea = styled.textarea`
  border: 1px solid #adafb4;
  border-radius: 5px;
  padding: 5px;
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;

export const InputCheck = styled.input``;

export const DethCheckContainer = styled.div``;

export const LabelCheckInput = styled.label`
  margin-left: 5px;
`;

export const ButtonConfirm = styled.button`
  width: 10rem;
  height: 2.5rem;
  border: 0;
  background: #009be5;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
`;
