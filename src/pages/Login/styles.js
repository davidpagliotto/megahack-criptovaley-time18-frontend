import styled from 'styled-components';

export const LoginWrapper = styled.form`
  background: #172b4d;
  width: 100%;
  padding: 2rem;
  border-radius: 5px;
`;

export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BrandContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const BrandName = styled.h1`
  color: #fff;
  font-size: 3rem;
`;

export const LoginTabs = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const LoginTabItem = styled.span`
  font-weight: bold;
  padding: 0.5rem 0;
  color: #576f8e;
  position: relative;
  cursor: pointer;
  transition: all 1s;

  ${(props) =>
    props.active &&
    `
    color: #fff;
    &::before {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
  `}

  &:first-child {
    margin-right: 1rem;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LoginContentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const LoginContentLabel = styled.label`
  color: #576f8e;
`;

export const LoginContentInputUser = styled.input`
  height: 2.5rem;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  border: 0;
  border-bottom: 1px solid #576f8e;
  background: transparent;
  color: #fff;
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  height: 2.5rem;
  background: #fff;
  margin-top: 2rem;
  background: #415673;
  border: 0;
  color: #fff;
  font-weight: bold;
`;

export const LoginForgotPassword = styled.span`
  margin-top: 1rem;
  color: #576f8e;
`;
