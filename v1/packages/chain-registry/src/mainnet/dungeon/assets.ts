import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dungeon',
  assets: [{
      description: 'Dungeon native token',
      denom_units: [{
          denom: 'udgn',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'udgn',
      name: 'Dungeon Coin',
      display: 'DGN',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;