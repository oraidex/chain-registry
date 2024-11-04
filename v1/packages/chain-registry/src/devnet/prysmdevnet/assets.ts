import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'prysmdevnet',
  assets: [{
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'uprysm',
          exponent: 0
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'uprysm',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;