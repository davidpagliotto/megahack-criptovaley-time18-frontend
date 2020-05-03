export function setEthereumAddress(ethereumAddress) {
  return {
    type: '@auth/SET_ETHEREUM_ADDRESS',
    payload: { ethereumAddress },
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function receiveAccount() {
  return {
    type: 'web3/RECEIVE_ACCOUNT',
  };
}
