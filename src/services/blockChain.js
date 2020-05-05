import { CONTRACT_ADDRESS, CONTRACT_ABI } from "~/config/BlockchainConfig";

const Web3 = require("web3");
const CryptoJS = require("crypto-js");

export const getCurrentProvider = () => {
  const provider = window.web3.currentProvider;
  return provider;
};

export const getContract = () => {
  const web3 = new Web3(getCurrentProvider());
  const contract = new web3.eth.Contract(CONTRACT_ABI.abi, CONTRACT_ADDRESS);
  return contract;
};

export const getAccount = async () => {
  const web3 = new Web3(getCurrentProvider());
  const account = await web3.eth.getAccounts();
  return account[0];
};

export const getBatchCount = async () => {
  const batchCount = await getContract().methods.getBatchCount().call();
  return batchCount;
};

export const insertBatch = async (
  batchAddress,
  supplier,
  batchOrigin,
  geolocation,
  document_number,
  document
) => {
  const batchParam = [
    batchAddress,
    supplier, // TODO: Depois deve ser trocado pelo do parametro
    batchOrigin,
    geolocation, // TODO: Depois deve ser trocado pelo do parametro
    document_number,
    document,
  ];

  // verifica o número de lotes existentes
  getBatchCount();

  const account = await getAccount();

  const p = new Promise((resolve, reject) => {
    getContract()
      .methods.insertBatch(...batchParam)
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        // TODO: Enviar essa hash para API
        resolve(hash);
      });
  });

  return p;
};

export const insertTransactionBatch = async (batchAddress) => {
  const transactionBatchParam = [
    `0x${CryptoJS.lib.WordArray.random(20)}`,
    batchAddress,
  ];

  const account = await getAccount();

  const p = new Promise((resolve, reject) => {
    getContract()
      .methods.insertTransactionBatch(...transactionBatchParam)
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        // TODO: Enviar essa hash para API
        resolve(hash);
      });
  });

  return p;
};

export const insertVaccinate = async (
  vaccinateAddress,
  batchAddress,
  document_number,
  document,
  vaccine
) => {
  const vaccinateParams = [
    vaccinateAddress,
    batchAddress,
    document_number,
    document,
    vaccine,
  ];

  const account = await getAccount();

  const p = new Promise((resolve, reject) => {
    getContract()
      .methods.insertVaccinate(...vaccinateParams)
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        // TODO: Enviar essa hash para API
        resolve(hash);
      });
  });

  return p;
};

export const addHealthFacilities = async (address) => {
  const account = await getAccount();

  getContract()
    .methods.add_healthfacilities(address)
    .send({
      from: account,
    })
    .on("transactionHash", (hash) => {});
};

export const insertOccurrence = async (
  occurrenceAddress,
  batchAddress,
  document_number,
  document,
  vaccine
) => {
  const occurrenceParams = [
    occurrenceAddress,
    batchAddress,
    document_number,
    document,
    vaccine,
  ];

  const account = await getAccount();

  const p = new Promise((resolve, reject) => {
    getContract()
      .methods.insertOccurrence(...occurrenceParams)
      .send({
        from: account,
      })
      .on("transactionHash", (hash) => {
        // TODO: Enviar essa hash para API
        resolve(hash);
      });
  });

  return p;
};
