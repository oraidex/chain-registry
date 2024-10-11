import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'unicorn',
  assets: [{
      description: 'The native token of Unicorn.',
      denom_units: [{
          denom: 'uwunicorn',
          exponent: 0
        }, {
          denom: 'unicorn',
          exponent: 6
        }],
      base: 'uwunicorn',
      name: 'Unicorn',
      display: 'unicorn',
      symbol: 'UWU',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png',
          theme: {
            primary_color_hex: '#D44CE6'
          }
        }],
      socials: {
        website: 'https://unicorn.meme/',
        twitter: 'https://x.com/unicornandmemes'
      },
      keywords: ['meme'],
      type_asset: 'sdk.coin'
    }]
};
export default info;