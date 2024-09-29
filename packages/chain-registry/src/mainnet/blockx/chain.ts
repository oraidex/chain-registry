import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'blockx',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.blockxnet.com/',
  pretty_name: 'BlockX',
  chain_type: 'cosmos',
  chain_id: 'blockx_19191-1',
  bech32_prefix: 'blockx',
  node_home: '$HOME/.blockxd',
  daemon_name: 'blockxd',
  key_algos: ['ethsecp256k1'],
  apis: {
    rpc: [{
        address: 'https://rpc-blockx.nodeist.net',
        provider: 'Nodeist'
      }],
    rest: [{
        address: 'https://api-blockx.nodeist.net',
        provider: 'Nodeist'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/blockx',
      tx_page: 'https://ping.pub/blockx/tx/${txHash}'
    }, {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/blockx/',
      tx_page: 'https://explorer.ist/blockx/tx/${txHash}'
    }],
  staking: {
    staking_tokens: [{
        denom: 'abcx'
      }]
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/blockx/images/blockx.png'
    }],
  slip44: 118
};
export default info;