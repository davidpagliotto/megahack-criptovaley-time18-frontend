import React from 'react';
import PropTypes from 'prop-types';

import PaperBase from '~/components/Paperbase';

export default function DefaultLayout({ children }) {
  return <PaperBase>{children}</PaperBase>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
