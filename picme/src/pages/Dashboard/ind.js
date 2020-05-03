const web3 = new Web3(window.web3.currentProvider);
const accounts = await web3.eth.getAccounts();
console.log(accounts);

const networkId = await web3.eth.net.getId();
console.log(networkId);
console.log(CONTRACT_ABI.abi);

let contract = new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ADDRESS);

// chamada de métodos
const getBatchCount = await contract.methods.getBatchCount().call();
console.log('getBatchCount: ', getBatchCount);

contract.methods
  .insertBatch(
    '0x77Bd466EA82dd85eF16b830ceAc42C6C6b68Ad2B', // batchAddress
    '0x77Bd466EA82dd85eF16b830ceAc42C6C6b68Ad2B', // supplier
    '0x77Bd466EA82dd85eF16b830ceAc42C6C6b68Ad2B', // origin
    '1', // geolocation
    '2', // document_number
    '3', // nf
    '4' // document
  )
  .send({
    from: accounts[0],
  })
  .on('transactionHash', function (hash) {
    console.log(hash);
  })
  .on('confirmation', function (confirmationNumber, receipt) {
    console.log(confirmationNumber, receipt);
  })
  .on('receipt', function (receipt) {
    // receipt example
    console.log(receipt);
  });

console.log(contract);
