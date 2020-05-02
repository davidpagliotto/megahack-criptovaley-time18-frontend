import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setEthereumAddress } from '~/store/modules/auth/actions';

import Web3Context from '~/contexts/web3';

export default function Web3Provider({ children }) {
  const dispatch = useDispatch();
  const [web3, setWeb3] = useState('');
  const { ethereum } = window;

  if (ethereum) {
    ethereum.on('accountsChanged', function (accounts) {
      if (accounts[0]) {
        setWeb3(accounts[0]);
        dispatch(setEthereumAddress(accounts[0]));
      }
    });
  }

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

Web3Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
