import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'neo',
  assets: [{
      type_asset: 'erc20',
      denom_units: [{
          denom: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
          exponent: 0
        }],
      address: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
      base: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
      display: '0x48c40d4666f93408be1bef038b6722404d9a4c2a',
      name: 'NeoBurger',
      symbol: 'bNEO'
    }]
};
export default info;