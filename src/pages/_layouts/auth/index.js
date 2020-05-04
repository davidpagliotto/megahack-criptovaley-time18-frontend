import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function AuthLayout({ children }) {
  return (
    <S.AuthLayoutWrapper>
      <S.AuthContent>{children}</S.AuthContent>
    </S.AuthLayoutWrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
