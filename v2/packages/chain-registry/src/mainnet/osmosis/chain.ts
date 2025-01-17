import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'osmosis',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://osmosis.zone/',
  prettyName: 'Osmosis',
  chainType: 'cosmos',
  chainId: 'osmosis-1',
  bech32Prefix: 'osmo',
  daemonName: 'osmosisd',
  nodeHome: '$HOME/.osmosisd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uosmo',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uosmo'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/osmosis-labs/osmosis',
    genesis: {
      name: 'v3',
      genesisUrl: 'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
    },
    recommendedVersion: 'v25.0.0',
    compatibleVersions: ['v25.0.0'],
    cosmosSdkVersion: 'osmosis-labs/cosmos-sdk v0.47.5-v25-osmo-1',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4',
      repo: 'https://github.com/osmosis-labs/cometbft',
      tag: 'v25-osmo-2'
    },
    binaries: {
      "linux/amd64": 'https://github.com/osmosis-labs/osmosis/releases/download/v25.0.0/osmosisd-25.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/osmosis-labs/osmosis/releases/download/v25.0.0/osmosisd-25.0.0-linux-arm64'
    },
    language: {
      type: 'go',
      version: '1.21.4'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/osmosis-labs/cosmos-sdk',
      version: 'v0.47.5',
      tag: 'v0.47.5-v25-osmo-1'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: 'v0.45.0',
      repo: 'https://github.com/osmosis-labs/wasmd',
      tag: 'v0.45.0-osmo',
      enabled: true
    }
  },
  images: [{
      imageSync: {
        chainName: 'osmosis',
        baseDenom: 'uosmo'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
      theme: {
        primaryColorHex: '#760dbb'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
  },
  description: 'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.osmosis.zone/',
        provider: 'Osmosis Foundation'
      },
      {
        address: 'https://rpc-osmosis.blockapsis.com',
        provider: 'chainapsis'
      },
      {
        address: 'https://osmosis-rpc.onivalidator.com',
        provider: 'Oni Validator ⛩️'
      },
      {
        address: 'https://osmosis-rpc.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://rpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/osmosis',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-osmosis.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://osmosis-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://osmosis.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://osmosis-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://osmosis.api.onfinality.io/public',
        provider: 'OnFinality'
      },
      {
        address: 'https://rpc-osmosis-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://osmosis-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://osmosis-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'http://rpc-osmosis.freshstaking.com:31657',
        provider: 'FreshSTAKING'
      },
      {
        address: 'https://osmosis-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://osmosis-mainnet.rpc.l0vd.com:443',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'https://osmosis-rpc.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://rpc.osmosis.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://rpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://osmosis.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/osmosis/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.cros-nest.com/osmosis',
        provider: 'Crosnest'
      },
      {
        address: 'https://rpc-osmo.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://rpc.osmosis.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://osmosis-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://osmosis.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [
      {
        address: 'https://lcd.osmosis.zone/',
        provider: 'Osmosis Foundation'
      },
      {
        address: 'https://rest.osmosis.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://osmosis-lcd.quickapi.com:443',
        provider: 'Chainlayer'
      },
      {
        address: 'https://lcd-osmosis.blockapsis.com',
        provider: 'chainapsis'
      },
      {
        address: 'https://rest.lavenderfive.com:443/osmosis',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rest-osmosis.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://api-osmosis-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://api-osmosis.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://osmosis-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://osmosis.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://osmosis-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-osmosis-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://osmosis-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://osmosis-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/osmosis/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://osmosis-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://osmosis-api.reece.sh',
        provider: 'Reecepbcups'
      },
      {
        address: 'https://api.osmosis.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://lcd.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://osmosis-rest.interstellar-lounge.org',
        provider: 'Interstellar Lounge 🍸'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/osmosis/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rest.cros-nest.com/osmosis',
        provider: 'Crosnest'
      },
      {
        address: 'https://rest-osmo.kewrnode.com',
        provider: 'Kewr Node'
      },
      {
        address: 'https://osmosis-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'osmosis.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-osmosis-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'osmosis.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'osmosis-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-osmosis.cosmos-spaces.cloud:1130',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-osmosis-01.stakeflow.io:6754',
        provider: 'Stakeflow'
      },
      {
        address: 'services.staketab.com:9010',
        provider: 'Staketab'
      },
      {
        address: 'osmosis-grpc.w3coins.io:12590',
        provider: 'w3coins'
      },
      {
        address: 'grpc-osmosis.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'osmosis-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'osmosis-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'https://grpc-osmosis.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'osmosis-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'grpc-osmosis.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'grpc.osmosis.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'https://grpc.osmosis.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'osmosis-grpc.noders.services:10090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/osmosis',
      txPage: 'https://ezstaking.app/osmosis/txs/${txHash}',
      accountPage: 'https://ezstaking.app/osmosis/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/osmosis',
      txPage: 'https://www.mintscan.io/osmosis/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/osmosis',
      txPage: 'https://ping.pub/osmosis/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://osmosis.explorers.guru',
      txPage: 'https://osmosis.explorers.guru/transaction/${txHash}',
      accountPage: 'https://osmosis.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/osmosis',
      txPage: 'https://atomscan.com/osmosis/transactions/${txHash}',
      accountPage: 'https://atomscan.com/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/osmosis',
      txPage: 'https://explorer.tcnetwork.io/osmosis/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/osmosis/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/osmosis',
      txPage: 'https://staking-explorer.com/transaction.php?chain=osmosis&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=osmosis&addr=${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/osmosis',
      accountPage: 'https://stakeflow.io/osmosis/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/osmosis',
      txPage: 'https://exp.nodeist.net/osmosis/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/osmosis-mainnet',
      txPage: 'https://explorers.l0vd.com/osmosis-mainnet/tx/${txHash}'
    },
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/osmosis',
      txPage: 'https://chainsco.pe/osmosis/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/osmosis',
      txPage: 'https://mainnet.whispernode.com/osmosis/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/osmosis/account/${accountAddress}'
    }
  ],
  keywords: ['dex']
};
export default info;