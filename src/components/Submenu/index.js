import React from 'react';

import * as S from './styles';

export default function Submenu() {
  return (
    <S.SubmenuWrapper>
      <S.SubmenuContent>
        <S.SubmenuItem>Laboratório</S.SubmenuItem>
        <S.SubmenuItem>Rastrei</S.SubmenuItem>
        <S.SubmenuItem>Aplicação</S.SubmenuItem>
        <S.SubmenuItem>Ocorrências</S.SubmenuItem>
      </S.SubmenuContent>
    </S.SubmenuWrapper>
  );
}
