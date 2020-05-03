import React from 'react';
import logo from '~/assets/logo.png';

import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.Logo src={logo} />
        <S.MenuContainer>
          <S.MenuItem>Home</S.MenuItem>
          <S.MenuItem>Saúde</S.MenuItem>
          <S.MenuItem>Logout</S.MenuItem>
        </S.MenuContainer>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}
