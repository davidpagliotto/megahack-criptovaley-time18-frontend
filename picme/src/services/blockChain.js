import { CONTRACT_ADDRESS, CONTRACT_ABI } from '~/config/BlockchainConfig';

const Web3 = require('web3');
const CryptoJS = require('crypto-js');

export const getCurrentProvider = () => {
  const provider = window.web3.currentProvider;
  console.log(provider);
  return provider;
};

export const getContract = () => {
  const web3 = new Web3();
  const contract = new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ADDRESS);
  return contract;
};

export const getAccount = async () => {
  const web3 = new Web3(window.web3.currentProvider);
  const account = await web3.eth.getAccounts();
  console.log('getAccount', account[0]);
  return account[0];
};

export const getBatchCount = async () => {
  const batchCount = await getContract().methods.getBatchCount().call();
  return batchCount;
};

// 0x"+CryptoJS.lib.WordArray.random(20)

export const insertBatch = async (
  supplier,
  batchOrigin,
  geolocation,
  document_number,
  document
) => {
  // const batchParam = [
  //   `0x${CryptoJS.lib.WordArray.random(20)}`,
  //   `0x${CryptoJS.lib.WordArray.random(20)}`, // TODO: Depois deve ser trocado pelo do parametro
  //   batchOrigin,
  //   geolocation, // TODO: Depois deve ser trocado pelo do parametro
  //   document_number,
  //   document,
  // ];

  getContract()
    .methods.insertBatch(
      `0xfC01e72e7089E5Ac5473B9Dc8d775570067588a3`,
      `0xfC01e72e7089E5Ac5473B9Dc8d775570067588a3`, // TODO: Depois deve ser trocado pelo do parametro
      '0x1772976766B5C5C01EbfcACBD3C7157DDd9DCf95',
      "{'lat':-27.5,'long':-47.5}", // geolocation
      '001', // document_number
      'NF' // document
    )
    .send({
      from: '0xA7a2fAd21628aaa224Db4c82F6062B771efb1Dfe',
    })
    .on('transactionHash', (hash) => {
      // TODO: Enviar essa hash para API
      console.log(hash);
    });
};
