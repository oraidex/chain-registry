import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'seda',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.seda.xyz/',
  prettyName: 'SEDA',
  chainType: 'cosmos',
  chainId: 'seda-1',
  bech32Prefix: 'seda',
  daemonName: 'sedad',
  nodeHome: '$HOME/.sedad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aseda',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 10000000000,
        highGasPrice: 14000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aseda'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sedaprotocol/seda-chain',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    binaries: {
      "linux/amd64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.1/sedad-amd64',
      "linux/arm64": 'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.1/sedad-arm64'
    },
    cosmosSdkVersion: 'v0.50.5',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/sedaprotocol/seda-networks/main/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.5'
    },
    ibc: {
      type: 'go',
      version: 'v8.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg'
  },
  description: 'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/seda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-rpc.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://seda-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://seda-rpc.applejuice.256x25.tech:443',
        provider: 'Apple juice 🧃'
      },
      {
        address: 'https://seda-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://seda_mainnet_rpc.chain.whenmoonwhenlambo.money:443',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc-seda-mainnet.keepitstaked.com:443',
        provider: 'KeepItStaked.com'
      }
    ],
    rest: [
      {
        address: 'https://lcd.mainnet.seda.xyz/',
        provider: 'SEDA'
      },
      {
        address: 'https://seda-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://seda-api.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://rest.lavenderfive.com:443/seda',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://seda-api.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://seda-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://seda-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://seda-api.applejuice.256x25.tech:443',
        provider: 'Apple juice 🧃'
      },
      {
        address: 'https://seda-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://seda_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api-seda-mainnet.keepitstaked.com:443',
        provider: 'KeepItStaked.com'
      }
    ],
    grpc: [
      {
        address: 'seda-grpc.polkachu.com:25890',
        provider: 'Polkachu'
      },
      {
        address: 'https://seda-grpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'seda.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'seda.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'seda-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.seda.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'grpc-seda.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ]
  },
  explorers: [
    {
      kind: 'sedaexplorer',
      url: 'https://explorer.seda.xyz/',
      txPage: 'https://explorer.seda.xyz/txs/${txHash}',
      accountPage: 'https://explorer.seda.xyz/account/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://seda.explorers.guru',
      txPage: 'https://seda.explorers.guru/transaction/${txHash}',
      accountPage: 'https://seda.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/seda',
      txPage: 'https://staking-explorer.com/transaction.php?chain=seda&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=seda&addr=${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/seda',
      txPage: 'https://mainnet.whispernode.com/seda/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/seda/account/${accountAddress}'
    },
    {
      kind: 'Apple juice 🧃',
      url: 'https://explorer.256x25.tech/seda-mainnet',
      txPage: 'https://explorer.256x25.tech/seda-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.256x25.tech/seda-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/seda',
      txPage: 'https://explorer.whenmoonwhenlambo.money/seda/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/seda/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
      theme: {
        primaryColorHex: '#8178d1'
      }
    }]
};
export default info;