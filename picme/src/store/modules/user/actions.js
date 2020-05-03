export function setEthereumAddress(ethereumAddress) {
  return {
    type: '@auth/SET_ETHEREUM_ADDRESS',
    payload: { ethereumAddress },
  };
}
