export function selectMenu(selectedMenu) {
  return {
    type: '@screen/SELECT_MENU',
    payload: { selectedMenu },
  };
}
