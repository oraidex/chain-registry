import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'swisstroniktestnet',
  assets: [{
      description: 'The native currency of Swisstronik.',
      denom_units: [{
          denom: 'aswtr',
          exponent: 0
        }, {
          denom: 'swtr',
          exponent: 18
        }],
      base: 'aswtr',
      name: 'Swisstronik Testnet',
      display: 'swtr',
      symbol: 'SWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/swisstroniktestnet/images/swisstronik.png'
        }]
    }]
};
export default info;