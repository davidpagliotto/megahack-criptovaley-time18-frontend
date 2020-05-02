import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import * as S from './styles';

export default function Login() {
  const [selectedTab, setSelectedTab] = useState('login');
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(signInRequest(userData.email, userData.password));
  };

  return (
    <S.LoginWrapper autoComplete="off">
      <S.ContainerBox>
        <S.BrandContainer>
          <S.Logo src={logo} />
          <S.BrandName>Imune</S.BrandName>
        </S.BrandContainer>
        <S.LoginTabs>
          <S.LoginTabItem
            active={selectedTab === 'login'}
            onClick={() => setSelectedTab('login')}
          >
            Login
          </S.LoginTabItem>
          <S.LoginTabItem
            active={selectedTab === 'register'}
            onClick={() => setSelectedTab('register')}
          >
            Register
          </S.LoginTabItem>
        </S.LoginTabs>
        <S.LoginContent>
          <S.LoginContentItem>
            <S.LoginContentLabel>Email</S.LoginContentLabel>
            <S.LoginContentInputUser
              onChange={handleChange}
              name="email"
              type="email"
            />
          </S.LoginContentItem>
          <S.LoginContentItem>
            <S.LoginContentLabel>Password</S.LoginContentLabel>
            <S.LoginContentInputUser
              onChange={handleChange}
              name="password"
              type="password"
            />
          </S.LoginContentItem>
        </S.LoginContent>
        <S.LoginButton onClick={handleClick}>Login</S.LoginButton>
        <S.LoginForgotPassword>Forgot Password?</S.LoginForgotPassword>
      </S.ContainerBox>
    </S.LoginWrapper>
  );
}
