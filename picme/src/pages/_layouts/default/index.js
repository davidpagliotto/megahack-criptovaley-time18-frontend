import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';

import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.LayoutDefaultWrapper>
      <Header />
      <>{children}</>
    </S.LayoutDefaultWrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
