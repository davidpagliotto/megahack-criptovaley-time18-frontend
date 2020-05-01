import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.LayoutDefaultWrapper>
      <>{children}</>
    </S.LayoutDefaultWrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
