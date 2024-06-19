/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/sol_basic_launchpad.json`.
 */
export type SolBasicLaunchpad = {
  "address": "HVNEuy9WDgrNsoqfQcTHJVpMYoDTyoyJe9VivY3Z4Hx",
  "metadata": {
    "name": "solBasicLaunchpad",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buyTokenWithNative",
      "discriminator": [
        36,
        76,
        128,
        56,
        43,
        2,
        67,
        161
      ],
      "accounts": [
        {
          "name": "launchPool",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "userPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "launchPool"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "launchPool"
              },
              {
                "kind": "account",
                "path": "launch_pool.authority",
                "account": "launchPool"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimToken",
      "discriminator": [
        116,
        206,
        27,
        191,
        166,
        19,
        0,
        73
      ],
      "accounts": [
        {
          "name": "launchPool",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "treasurer",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "userPool",
          "writable": true
        },
        {
          "name": "userTokenAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "completeLaunchPool",
      "discriminator": [
        130,
        45,
        208,
        226,
        176,
        23,
        58,
        127
      ],
      "accounts": [
        {
          "name": "launchPool",
          "writable": true
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "createNativePool",
      "discriminator": [
        237,
        223,
        217,
        142,
        217,
        5,
        186,
        244
      ],
      "accounts": [
        {
          "name": "launchPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  97,
                  117,
                  110,
                  99,
                  104,
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "treasurer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "launchPool"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "unlockDate",
          "type": "i64"
        },
        {
          "name": "poolSize",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAmount",
          "type": "u64"
        },
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "tokenMintDecimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startLaunchPool",
      "discriminator": [
        140,
        177,
        234,
        198,
        250,
        135,
        109,
        223
      ],
      "accounts": [
        {
          "name": "launchPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  97,
                  117,
                  110,
                  99,
                  104,
                  112,
                  111,
                  111,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "tokenMint"
        },
        {
          "name": "sourceTokenAccount",
          "writable": true
        },
        {
          "name": "treasurer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "launchPool"
              },
              {
                "kind": "account",
                "path": "tokenMint"
              }
            ]
          }
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "launchPool",
      "discriminator": [
        29,
        65,
        189,
        216,
        67,
        129,
        179,
        61
      ]
    },
    {
      "name": "treasurer",
      "discriminator": [
        245,
        151,
        187,
        112,
        232,
        170,
        184,
        105
      ]
    },
    {
      "name": "userPool",
      "discriminator": [
        236,
        73,
        56,
        184,
        205,
        24,
        145,
        220
      ]
    }
  ],
  "events": [
    {
      "name": "buyTokenWithNativeEvent",
      "discriminator": [
        113,
        250,
        53,
        127,
        82,
        227,
        186,
        156
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "mutationForbidden",
      "msg": "The authority is not authorized to initialize the program"
    },
    {
      "code": 6001,
      "name": "invalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6002,
      "name": "invalidUnlockDate",
      "msg": "Invalid unlock date"
    },
    {
      "code": 6003,
      "name": "invalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6004,
      "name": "invalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6005,
      "name": "invalidLaunchPoolStatus",
      "msg": "Invalid launch pool status"
    },
    {
      "code": 6006,
      "name": "invalidCurrencyType",
      "msg": "Invalid currency type"
    },
    {
      "code": 6007,
      "name": "poolNotEnough",
      "msg": "Pool not enough to buy"
    },
    {
      "code": 6008,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6009,
      "name": "maximumTokenAmountReached",
      "msg": "Maximum token amount reached"
    },
    {
      "code": 6010,
      "name": "timeLockNotExpired",
      "msg": "Time lock not expired"
    },
    {
      "code": 6011,
      "name": "noBump",
      "msg": "Cannot find treasurer account"
    },
    {
      "code": 6012,
      "name": "minimumTokenAmountNotReached",
      "msg": "Minimum token amount not reached"
    },
    {
      "code": 6013,
      "name": "invalidCreator",
      "msg": "Invalid creator"
    },
    {
      "code": 6014,
      "name": "poolSizeRemainingNotEnough",
      "msg": "Pool size remaining not enough"
    },
    {
      "code": 6015,
      "name": "invalidTreasurer",
      "msg": "Invalid treasurer"
    },
    {
      "code": 6016,
      "name": "invalidVault",
      "msg": "Invalid vault"
    },
    {
      "code": 6017,
      "name": "invalidLaunchPool",
      "msg": "Invalid launch pool"
    },
    {
      "code": 6018,
      "name": "whitelistFulled",
      "msg": "White list is full"
    },
    {
      "code": 6019,
      "name": "walletAlreadyAdded",
      "msg": "Wallet already added"
    },
    {
      "code": 6020,
      "name": "walletNotInList",
      "msg": "Wallet not in list"
    },
    {
      "code": 6021,
      "name": "numberCastError",
      "msg": "Unable to cast number into BigInt"
    },
    {
      "code": 6022,
      "name": "invalidWhitelist",
      "msg": "Invalid whitelist"
    },
    {
      "code": 6023,
      "name": "invalidLaunchPoolType",
      "msg": "Invalid launch pool type"
    },
    {
      "code": 6024,
      "name": "walletsMustNotBeEmpty",
      "msg": "Wallets must not be empty"
    },
    {
      "code": 6025,
      "name": "whitelistNotEnoughSpace",
      "msg": "Whitelist not enough space"
    },
    {
      "code": 6026,
      "name": "launchPoolAlreadyCompleted",
      "msg": "Launch pool already completed"
    },
    {
      "code": 6027,
      "name": "userNotInWhiteList",
      "msg": "User not in whitelist"
    },
    {
      "code": 6028,
      "name": "overflow",
      "msg": "Calculation overflow"
    },
    {
      "code": 6029,
      "name": "invalidVestingPlan",
      "msg": "Invalid vesting plan"
    },
    {
      "code": 6030,
      "name": "invalidScheduleSize",
      "msg": "Invalid schedule size"
    }
  ],
  "types": [
    {
      "name": "buyTokenWithNativeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "buyer",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          },
          {
            "name": "vaultAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "currencyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "sol"
          },
          {
            "name": "usdc"
          }
        ]
      }
    },
    {
      "name": "launchPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unlockDate",
            "type": "i64"
          },
          {
            "name": "poolSize",
            "type": "u64"
          },
          {
            "name": "minimumTokenAmount",
            "type": "u64"
          },
          {
            "name": "maximumTokenAmount",
            "type": "u64"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "poolSizeRemaining",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "tokenMintDecimals",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "vaultAmount",
            "type": "u64"
          },
          {
            "name": "isVesting",
            "type": "bool"
          },
          {
            "name": "currency",
            "type": {
              "defined": {
                "name": "currencyType"
              }
            }
          },
          {
            "name": "poolType",
            "type": {
              "defined": {
                "name": "launchPoolType"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "launchPoolState"
              }
            }
          }
        ]
      }
    },
    {
      "name": "launchPoolState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "pending"
          },
          {
            "name": "active"
          },
          {
            "name": "completed"
          },
          {
            "name": "cancelled"
          }
        ]
      }
    },
    {
      "name": "launchPoolType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "fairLaunch"
          },
          {
            "name": "whiteList"
          }
        ]
      }
    },
    {
      "name": "treasurer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "launchPool",
            "type": "pubkey"
          },
          {
            "name": "tokenMint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "currencyAmount",
            "type": "u64"
          },
          {
            "name": "claimed",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
