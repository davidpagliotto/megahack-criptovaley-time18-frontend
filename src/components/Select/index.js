import React from 'react';

import * as S from './styles';

export default function Select({ options }) {
  return (
    <S.SelectWrapper>
      <S.Select>
        {options.map((option, idx) => (
          <S.SelectOption key={idx} />
        ))}
      </S.Select>
    </S.SelectWrapper>
  );
}
