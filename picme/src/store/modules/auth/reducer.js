import produce from 'immer';

const INITIAL_STATE = {
  ethereumAddress: '',
  signed: false,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SET_ETHEREUM_ADDRESS': {
        draft.ethereumAddress = action.payload.ethereumAddress;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }
      case 'web3/RECEIVE_ACCOUNT': {
        console.log('action', action);
        break;
      }
      default:
    }
  });
}
