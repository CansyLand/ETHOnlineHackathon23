const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Account: {
          address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_guardian",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "entryPoint_",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AccountLocked",
              type: "error",
            },
            {
              inputs: [],
              name: "ExceedsMaxLockTime",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidInput",
              type: "error",
            },
            {
              inputs: [],
              name: "NotAuthorized",
              type: "error",
            },
            {
              inputs: [],
              name: "OwnershipCycle",
              type: "error",
            },
            {
              inputs: [],
              name: "UntrustedImplementation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "lockedUntil",
                  type: "uint256",
                },
              ],
              name: "LockUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "OverrideUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "hasPermission",
                  type: "bool",
                },
              ],
              name: "PermissionUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [],
              name: "accountAbstrEntryPoint",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "entryPoint",
              outputs: [
                {
                  internalType: "contract IEntryPoint",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  internalType: "uint256",
                  name: "operation",
                  type: "uint256",
                },
              ],
              name: "execute",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "guardian",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                },
              ],
              name: "isAuthorized",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "isLocked",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "hash",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              name: "isValidSignature",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "magicValue",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "isValidSigner",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "magicValue",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_lockedUntil",
                  type: "uint256",
                },
              ],
              name: "lock",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "lockedUntil",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155BatchReceived",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC1155Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "receivedTokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "onERC721Received",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
              name: "overrides",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "permissions",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxiableUUID",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4[]",
                  name: "selectors",
                  type: "bytes4[]",
                },
                {
                  internalType: "address[]",
                  name: "implementations",
                  type: "address[]",
                },
              ],
              name: "setOverrides",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "callers",
                  type: "address[]",
                },
                {
                  internalType: "bool[]",
                  name: "_permissions",
                  type: "bool[]",
                },
              ],
              name: "setPermissions",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "state",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "token",
              outputs: [
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
              ],
              name: "upgradeTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newImplementation",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "upgradeToAndCall",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
                {
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "missingAccountFunds",
                  type: "uint256",
                },
              ],
              name: "validateUserOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "validationData",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        AccountGuardian: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "executor",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "TrustedExecutorUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "TrustedImplementationUpdated",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isTrustedExecutor",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isTrustedImplementation",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "executor",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "setTrustedExecutor",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "trusted",
                  type: "bool",
                },
              ],
              name: "setTrustedImplementation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        AccountProxy: {
          address: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InvalidImplementation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "previousAdmin",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "newAdmin",
                  type: "address",
                },
              ],
              name: "AdminChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "beacon",
                  type: "address",
                },
              ],
              name: "BeaconUpgraded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
              ],
              name: "Upgraded",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [],
              name: "defaultImplementation",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        ERC6551Registry: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [],
              name: "InitializationFailed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "AccountCreated",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
              ],
              name: "account",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementation",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "chainId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "salt",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "initData",
                  type: "bytes",
                },
              ],
              name: "createAccount",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        EntryPoint: {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "preOpGas",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
                {
                  internalType: "uint48",
                  name: "validAfter",
                  type: "uint48",
                },
                {
                  internalType: "uint48",
                  name: "validUntil",
                  type: "uint48",
                },
                {
                  internalType: "bool",
                  name: "targetSuccess",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "targetResult",
                  type: "bytes",
                },
              ],
              name: "ExecutionResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "opIndex",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "reason",
                  type: "string",
                },
              ],
              name: "FailedOp",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "SenderAddressResult",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureValidationFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResult",
              type: "error",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "sigFailed",
                      type: "bool",
                    },
                    {
                      internalType: "uint48",
                      name: "validAfter",
                      type: "uint48",
                    },
                    {
                      internalType: "uint48",
                      name: "validUntil",
                      type: "uint48",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterContext",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.ReturnInfo",
                  name: "returnInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "senderInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "factoryInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "stake",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "unstakeDelaySec",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IStakeManager.StakeInfo",
                  name: "paymasterInfo",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "stake",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "unstakeDelaySec",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct IStakeManager.StakeInfo",
                      name: "stakeInfo",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct IEntryPoint.AggregatorStakeInfo",
                  name: "aggregatorInfo",
                  type: "tuple",
                },
              ],
              name: "ValidationResultWithAggregation",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "factory",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
              ],
              name: "AccountDeployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "BeforeExecution",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalDeposit",
                  type: "uint256",
                },
              ],
              name: "Deposited",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "aggregator",
                  type: "address",
                },
              ],
              name: "SignatureAggregatorChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "totalStaked",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "unstakeDelaySec",
                  type: "uint256",
                },
              ],
              name: "StakeLocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "withdrawTime",
                  type: "uint256",
                },
              ],
              name: "StakeUnlocked",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "StakeWithdrawn",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "actualGasUsed",
                  type: "uint256",
                },
              ],
              name: "UserOperationEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "userOpHash",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "revertReason",
                  type: "bytes",
                },
              ],
              name: "UserOperationRevertReason",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "SIG_VALIDATION_FAILED",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "paymasterAndData",
                  type: "bytes",
                },
              ],
              name: "_validateSenderAndPaymaster",
              outputs: [],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
              ],
              name: "addStake",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "depositTo",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "deposits",
              outputs: [
                {
                  internalType: "uint112",
                  name: "deposit",
                  type: "uint112",
                },
                {
                  internalType: "bool",
                  name: "staked",
                  type: "bool",
                },
                {
                  internalType: "uint112",
                  name: "stake",
                  type: "uint112",
                },
                {
                  internalType: "uint32",
                  name: "unstakeDelaySec",
                  type: "uint32",
                },
                {
                  internalType: "uint48",
                  name: "withdrawTime",
                  type: "uint48",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "getDepositInfo",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint112",
                      name: "deposit",
                      type: "uint112",
                    },
                    {
                      internalType: "bool",
                      name: "staked",
                      type: "bool",
                    },
                    {
                      internalType: "uint112",
                      name: "stake",
                      type: "uint112",
                    },
                    {
                      internalType: "uint32",
                      name: "unstakeDelaySec",
                      type: "uint32",
                    },
                    {
                      internalType: "uint48",
                      name: "withdrawTime",
                      type: "uint48",
                    },
                  ],
                  internalType: "struct IStakeManager.DepositInfo",
                  name: "info",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "getNonce",
              outputs: [
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "initCode",
                  type: "bytes",
                },
              ],
              name: "getSenderAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "getUserOpHash",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "initCode",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "callData",
                          type: "bytes",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "bytes",
                          name: "paymasterAndData",
                          type: "bytes",
                        },
                        {
                          internalType: "bytes",
                          name: "signature",
                          type: "bytes",
                        },
                      ],
                      internalType: "struct UserOperation[]",
                      name: "userOps",
                      type: "tuple[]",
                    },
                    {
                      internalType: "contract IAggregator",
                      name: "aggregator",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                  name: "opsPerAggregator",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleAggregatedOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation[]",
                  name: "ops",
                  type: "tuple[]",
                },
                {
                  internalType: "address payable",
                  name: "beneficiary",
                  type: "address",
                },
              ],
              name: "handleOps",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint192",
                  name: "key",
                  type: "uint192",
                },
              ],
              name: "incrementNonce",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "sender",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "nonce",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "callGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "verificationGasLimit",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "preVerificationGas",
                          type: "uint256",
                        },
                        {
                          internalType: "address",
                          name: "paymaster",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "maxFeePerGas",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "maxPriorityFeePerGas",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct EntryPoint.MemoryUserOp",
                      name: "mUserOp",
                      type: "tuple",
                    },
                    {
                      internalType: "bytes32",
                      name: "userOpHash",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "prefund",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "contextOffset",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preOpGas",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct EntryPoint.UserOpInfo",
                  name: "opInfo",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "context",
                  type: "bytes",
                },
              ],
              name: "innerHandleOp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "actualGasCost",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint192",
                  name: "",
                  type: "uint192",
                },
              ],
              name: "nonceSequenceNumber",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "op",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "targetCallData",
                  type: "bytes",
                },
              ],
              name: "simulateHandleOp",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "sender",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "nonce",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "initCode",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "callData",
                      type: "bytes",
                    },
                    {
                      internalType: "uint256",
                      name: "callGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "verificationGasLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "preVerificationGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPriorityFeePerGas",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes",
                      name: "paymasterAndData",
                      type: "bytes",
                    },
                    {
                      internalType: "bytes",
                      name: "signature",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct UserOperation",
                  name: "userOp",
                  type: "tuple",
                },
              ],
              name: "simulateValidation",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unlockStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
              ],
              name: "withdrawStake",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "withdrawAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "withdrawAmount",
                  type: "uint256",
                },
              ],
              name: "withdrawTo",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        FakeApeCoin: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        GenericNFT: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_fromTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_toTokenId",
                  type: "uint256",
                },
              ],
              name: "BatchMetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "MetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "_nextTokenId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "notSoSafeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
              ],
              name: "safeMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "contractOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
