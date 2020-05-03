export const CONTRACT_ADDRESS = '0x3eb56C6744F3515a35C46117C55DDd59284cb62a';

export const CONTRACT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'to',
        type: 'address',
      },
    ],
    name: 'add_admins',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'to',
        type: 'address',
      },
    ],
    name: 'add_healthfacilities',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'batchAddress',
        type: 'address',
      },
      {
        name: 'supplier',
        type: 'address',
      },
      {
        name: 'origin',
        type: 'address',
      },
      {
        name: 'geolocation',
        type: 'string',
      },
      {
        name: 'document_number',
        type: 'string',
      },
      {
        name: 'nf',
        type: 'string',
      },
      {
        name: 'document',
        type: 'string',
      },
    ],
    name: 'insertBatch',
    outputs: [
      {
        name: 'index',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'admins',
        type: 'address[]',
      },
      {
        name: 'heathfacilities',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'batchAddress',
        type: 'address',
      },
    ],
    name: 'getBatch',
    outputs: [
      {
        name: 'geolocation',
        type: 'string',
      },
      {
        name: 'document',
        type: 'string',
      },
      {
        name: 'document_number',
        type: 'string',
      },
      {
        name: 'nf',
        type: 'string',
      },
      {
        name: 'index',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getBatchCount',
    outputs: [
      {
        name: 'count',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'batchAddress',
        type: 'address',
      },
    ],
    name: 'isBatch',
    outputs: [
      {
        name: 'isIndeed',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
