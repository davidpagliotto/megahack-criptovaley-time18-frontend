export const CONTRACT_ADDRESS = '0x3a2f534413c314d48fce4de3b7638188d50fbde2';

export const CONTRACT_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hashStationValue",
        "type": "bytes32"
      }
    ],
    "name": "findStationValue",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hashStation",
        "type": "bytes32"
      }
    ],
    "name": "findStation",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hashStationValue",
        "type": "bytes32"
      }
    ],
    "name": "registerStationValue",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "revenues",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hashStation",
        "type": "bytes32"
      }
    ],
    "name": "registerStation",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];
