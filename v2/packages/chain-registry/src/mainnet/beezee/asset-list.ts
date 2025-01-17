import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'beezee',
  assets: [
    {
      description: 'BeeZee network native coin',
      extendedDescription: 'Powered by BZE Coin, BeeZee Network offers users access to decentralized services through a variety of applications built on a fast and cost-efficient blockchain.',
      denomUnits: [{
          denom: 'ubze',
          exponent: 0
        }, {
          denom: 'bze',
          exponent: 6
        }],
      base: 'ubze',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      coingeckoId: 'bzedge',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg',
          theme: {
            primaryColorHex: '#079fd7'
          }
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://getbze.com/',
        twitter: 'https://x.com/BZEdgeCoin'
      }
    },
    {
      description: 'Vidulum App Token',
      extendedDescription: 'Vidulum App is your one stop, multi-currency crypto web wallet. Hold, earn, and own your crypto assets in non-custodial fashion from any device, anytime.',
      denomUnits: [{
          denom: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
          exponent: 0
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      base: 'factory/bze13gzq40che93tgfm9kzmkpjamah5nj0j73pyhqk/uvdl',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      coingeckoId: 'vidulum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primaryColorHex: '#3454bc'
          }
        }],
      typeAsset: 'sdk.coin',
      socials: {
        website: 'https://vidulum.app/',
        twitter: 'https://x.com/VidulumApp'
      }
    },
    {
      description: 'OSMO from Osmosis',
      denomUnits: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-340'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      description: 'Crypto2Mars Community Token',
      denomUnits: [{
          denom: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
          exponent: 0
        }, {
          denom: 'C2M',
          exponent: 6
        }],
      base: 'factory/bze15pqjgk4la0mfphwddce00d05n3th3u66n3ptcv/2MARS',
      name: 'Crypto2Mars',
      display: 'C2M',
      symbol: 'C2M',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/c2m.png',
          theme: {
            primaryColorHex: '#FEFEFE'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of Archway network',
      denomUnits: [
        {
          denom: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/C00D101A3572A5374E23F11944463D1325319E255D7C824B33AF2F927F532348',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch',
            channelId: 'channel-147'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/aarch'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primaryColorHex: '#fc4c04'
          }
        }]
    },
    {
      description: 'USDC from Noble',
      denomUnits: [{
          denom: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6490A7EAB61059BFC1CDDEB05917DD70BDF3A611654162A1A47DB930D40D8AF4',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-95'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default info;