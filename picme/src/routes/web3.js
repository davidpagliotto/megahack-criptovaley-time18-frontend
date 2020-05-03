async function initialize(provider, account, network) {
  console.log(provider, account, network);
}

export const props = {
  onCheckSuccess: async (provider, account, network) =>
    await initialize(provider, account, network),

  renderDefault: () => <Loader />,

  renderErrored: (error) => (
    <Err message={error.message || 'Unexpected error'} />
  ),

  renderChecked: (provider, account, network) => <Content />,
};
