import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chihuahua',
  assets: [
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [{
          denom: 'uhuahua',
          exponent: 0
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'uhuahua',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }]
    },
    {
      description: 'Puppy',
      denom_units: [{
          denom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
          exponent: 0
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      base: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      }
    },
    {
      description: 'has a hat',
      extended_description: 'Chihuahuawifhat is the biggest cult of the Chihuahua chain aiming to take over Cosmos. The token is $BADDOG and we\'re not playing around.',
      denom_units: [{
          denom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
          exponent: 0
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      base: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png',
          theme: {
            primary_color_hex: '#F7E3C0',
            background_color_hex: '#F7E3C0',
            circle: true
          }
        }],
      socials: {
        website: 'https://baddog.lol/',
        twitter: 'https://x.com/chihuahuawifhat'
      }
    },
    {
      description: 'Woof',
      denom_units: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
          exponent: 0
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }]
    },
    {
      description: 'Tacos',
      denom_units: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
          exponent: 0
        }, {
          denom: 'TACOS',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/utacos',
      name: 'TACOS',
      display: 'TACOS',
      symbol: 'TACOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/tacos.png'
        }]
    },
    {
      description: 'Weed',
      denom_units: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
          exponent: 0
        }, {
          denom: 'WEED',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uweed',
      name: 'WEED',
      display: 'WEED',
      symbol: 'WEED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/weed.png'
        }]
    },
    {
      description: 'Bulldog',
      denom_units: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
          exponent: 0
        }, {
          denom: 'BDOG',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ubdog',
      name: 'BDOG',
      display: 'BDOG',
      symbol: 'BDOG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bdog.png'
        }]
    },
    {
      description: 'CaneCorso',
      denom_units: [{
          denom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
          exponent: 0
        }, {
          denom: 'CORSO',
          exponent: 6
        }],
      base: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/ucorso',
      name: 'CORSO',
      display: 'CORSO',
      symbol: 'CORSO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/corso.png'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked HUAHUA',
      denom_units: [{
          denom: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
          exponent: 0
        }, {
          denom: 'bHUAHUA',
          exponent: 6
        }],
      type_asset: 'cw20',
      address: 'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      base: 'cw20:chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      name: 'BackBone Labs Liquid Staked HUAHUA',
      display: 'bHUAHUA',
      symbol: 'bHUAHUA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/bhuahua.png'
      },
      coingecko_id: 'backbone-labs-staked-huahua'
    },
    {
      description: 'ashHUAHUA - Burned HUAHUA',
      extended_description: 'ashHUAHUA - receipt token recieved when burning HUAHUA via ASH DAOs Furnace',
      denom_units: [{
          denom: 'factory/chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0/uhuahua.ash',
          exponent: 0
        }, {
          denom: 'ashHUAHUA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0',
      base: 'factory/chihuahua1hplyuj2hzxd75q8686g9vm3uzrrny9ggvt8aza2csupgdp98vg2sp0e3h0/uhuahua.ash',
      name: 'Burned HUAHUA',
      display: 'ashHUAHUA',
      symbol: 'ashHUAHUA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/ashhuahua.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/ashhuahua.png'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/7D01429FF7542DBC41C261793B480B63FE7A83260C751989CC268BC7E852EB99',
          exponent: 0,
          aliases: ['factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH']
        }, {
          denom: 'ampGASH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7D01429FF7542DBC41C261793B480B63FE7A83260C751989CC268BC7E852EB99',
      name: 'ampGASH',
      display: 'ampGASH',
      symbol: 'ampGASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH',
            channel_id: 'channel-39'
          },
          chain: {
            channel_id: 'channel-10',
            path: 'transfer/channel-10/factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'migaloo',
            base_denom: 'factory/migaloo1nsskhvvh0msm7d5ke2kfg24a8d4jecsnxd28s27h0uz5kf9ap60shlqmcl/ampGASH'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampgash.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampgash.png'
      }
    }
  ]
};
export default info;