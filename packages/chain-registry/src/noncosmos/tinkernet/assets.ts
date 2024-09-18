import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'tinkernet',
  assets: [{
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      extended_description: 'Tinkernet is a Kusama parachain and the sister-chain of the InvArch Network on Polkadot. Tinkernet is an experimental proving ground where omnichain account & DAO governance protocols are deployed and tested before deploying on the InvArch Network. Protocols on Tinkernet realize features such as multichain multisig accounts & DAO Staking. Unlike a testnet, Tinkernet features real value.',
      socials: {
        website: 'https://tinker.network',
        twitter: 'https://twitter.com/TinkerParachain'
      },
      denom_units: [{
          denom: 'Planck',
          exponent: 0
        }, {
          denom: 'TNKR',
          exponent: 12
        }],
      base: 'Planck',
      name: 'Tinkernet',
      display: 'TNKR',
      symbol: 'TNKR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      coingecko_id: 'tinkernet',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    }]
};
export default info;