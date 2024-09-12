import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'thorchain',
  assets: [{
      description: 'The native token of THORChain',
      denom_units: [{
          denom: 'rune',
          exponent: 0
        }, {
          denom: 'RUNE',
          exponent: 8
        }],
      base: 'rune',
      name: 'THORChain RUNE',
      display: 'RUNE',
      symbol: 'RUNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/thorchain/images/rune.svg'
      },
      coingecko_id: 'thorchain'
    }]
};
export default info;