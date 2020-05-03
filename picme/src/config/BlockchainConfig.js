export const CONTRACT_ADDRESS = '0x90df2c83044dEC7b501D69b9334a254ebf78b824';

export const CONTRACT_ABI = {
  contractName: 'Register',
  abi: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "add_admins",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "transactionBatchAddress",
          "type": "address"
        },
        {
          "name": "batchAddress",
          "type": "address"
        }
      ],
      "name": "insertTransactionBatch",
      "outputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "batchAddress",
          "type": "address"
        }
      ],
      "name": "getBatch",
      "outputs": [
        {
          "name": "supplier",
          "type": "address"
        },
        {
          "name": "batchOrigin",
          "type": "address"
        },
        {
          "name": "responsible",
          "type": "address"
        },
        {
          "name": "geolocation",
          "type": "string"
        },
        {
          "name": "document",
          "type": "string"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "index",
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
          "name": "to",
          "type": "address"
        }
      ],
      "name": "add_healthfacilities",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "occurrenceAddress",
          "type": "address"
        }
      ],
      "name": "getOccurrence",
      "outputs": [
        {
          "name": "responsible",
          "type": "address"
        },
        {
          "name": "batchAddress",
          "type": "address"
        },
        {
          "name": "document",
          "type": "string"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "vaccine",
          "type": "string"
        },
        {
          "name": "index",
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
          "name": "vaccinateAddress",
          "type": "address"
        },
        {
          "name": "batchAddress",
          "type": "address"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "document",
          "type": "string"
        },
        {
          "name": "vaccine",
          "type": "string"
        }
      ],
      "name": "insertVaccinate",
      "outputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "remove_healthfacilities",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "vaccinateAddress",
          "type": "address"
        }
      ],
      "name": "getVaccinate",
      "outputs": [
        {
          "name": "responsible",
          "type": "address"
        },
        {
          "name": "batchAddress",
          "type": "address"
        },
        {
          "name": "document",
          "type": "string"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "vaccine",
          "type": "string"
        },
        {
          "name": "index",
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
          "name": "to",
          "type": "address"
        }
      ],
      "name": "remove_admins",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "occurrenceAddress",
          "type": "address"
        },
        {
          "name": "batchAddress",
          "type": "address"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "document",
          "type": "string"
        },
        {
          "name": "vaccine",
          "type": "string"
        }
      ],
      "name": "insertOccurrence",
      "outputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTransactionBatchCount",
      "outputs": [
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBatchCount",
      "outputs": [
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "transactionBatchAddress",
          "type": "address"
        }
      ],
      "name": "isTransactionBatch",
      "outputs": [
        {
          "name": "isIndeed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "batchAddress",
          "type": "address"
        }
      ],
      "name": "isBatch",
      "outputs": [
        {
          "name": "isIndeed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOccurrenceCount",
      "outputs": [
        {
          "name": "count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "occurrenceAddress",
          "type": "address"
        }
      ],
      "name": "isOccurrence",
      "outputs": [
        {
          "name": "isIndeed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getVaccinateCount",
      "outputs": [
        {
          "name": "count",
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
          "name": "batchAddress",
          "type": "address"
        },
        {
          "name": "supplier",
          "type": "address"
        },
        {
          "name": "batchOrigin",
          "type": "address"
        },
        {
          "name": "geolocation",
          "type": "string"
        },
        {
          "name": "documentNumber",
          "type": "string"
        },
        {
          "name": "document",
          "type": "string"
        }
      ],
      "name": "insertBatch",
      "outputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "vaccinateAddress",
          "type": "address"
        }
      ],
      "name": "isVaccinate",
      "outputs": [
        {
          "name": "isIndeed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "admins",
          "type": "address[]"
        },
        {
          "name": "heathfacilities",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
};
