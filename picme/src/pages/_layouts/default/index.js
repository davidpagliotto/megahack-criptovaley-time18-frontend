import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Submenu from '~/components/Submenu';

import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.LayoutDefaultWrapper>
      <Header />
      <Submenu />
      <>{children}</>
    </S.LayoutDefaultWrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
