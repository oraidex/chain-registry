import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'titan',
  assets: [
    {
      description: 'The native token of the Titan network.',
      denom_units: [
        {
          denom: 'atkx',
          exponent: 0,
          aliases: ['attotkx']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18,
          aliases: []
        }
      ],
      base: 'atkx',
      display: 'tkx',
      name: 'titan tkx',
      symbol: 'TKX',
      coingecko_id: 'tokenize-xchange',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
        }
      ],
      keywords: ['staking'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/tkx.png'
      }
    }
  ]
};
export default info;
