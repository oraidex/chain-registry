import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'mars',
  assets: [{
      description: 'Mars Protocol token (pre-migration)',
      denom_units: [{
          denom: 'umars',
          exponent: 0
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'umars',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS.old',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS'
          },
          provider: 'Mars Hub'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token-ibc.svg',
          theme: {
            primary_color_hex: '#000000'
          }
        }],
      socials: {
        website: 'https://www.marsprotocol.io/',
        twitter: 'https://twitter.com/mars_protocol'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;