import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function AuthLayout({ children }) {
  return (
    <S.AuthLayoutWrapper>
      <>{children}</>
    </S.AuthLayoutWrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
