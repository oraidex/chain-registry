import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'althea',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://althea.net/',
  pretty_name: 'Althea',
  chain_id: 'althea_258432-1',
  bech32_prefix: 'althea',
  daemon_name: 'althea',
  node_home: '$HOME/.althea',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aalthea',
        fixed_min_gas_price: 100000000000,
        low_gas_price: 100000000000,
        average_gas_price: 100000000000,
        high_gas_price: 300000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aalthea'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.png'
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/althea/images/althea.svg'
    }],
  codebase: {

  },
  apis: {
    rest: [{
        address: 'https://nodes.chandrastation.com/api/althea/',
        provider: 'Chandra Station'
      }],
    rpc: [{
        address: 'https://nodes.chandrastation.com/rpc/althea/',
        provider: 'Chandra Station'
      }]
  }
};
export default info;