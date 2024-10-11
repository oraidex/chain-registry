import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bandchain',
  assets: [{
      description: 'The native token of BandChain',
      denom_units: [{
          denom: 'uband',
          exponent: 0
        }, {
          denom: 'band',
          exponent: 6
        }],
      base: 'uband',
      display: 'band',
      name: 'Band Protocol',
      symbol: 'BAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      coingecko_id: 'band-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg',
          theme: {
            primary_color_hex: '#4424e4'
          }
        }],
      socials: {
        website: 'https://www.bandprotocol.com/',
        twitter: 'https://twitter.com/BandProtocol'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;