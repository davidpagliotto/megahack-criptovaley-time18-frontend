import produce from 'immer';

const INITIAL_STATE = {
  selectedMenu: 'Dashboard',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@screen/SELECT_MENU': {
        draft.selectedMenu = action.payload.selectedMenu;
        break;
      }
      default:
    }
  });
}
