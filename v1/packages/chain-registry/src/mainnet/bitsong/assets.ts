import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'bitsong',
  assets: [
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ubtsg',
          exponent: 0
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ubtsg',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg',
          theme: {
            primary_color_hex: '#c8307f'
          }
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      }
    },
    {
      description: 'Adam Clay a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
          exponent: 0
        }, {
          denom: 'clay',
          exponent: 6
        }],
      base: 'ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09',
      name: 'Adam Clay FanToken',
      display: 'clay',
      symbol: 'CLAY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png',
          theme: {
            primary_color_hex: '#e8e5e7'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Nicola Fasano a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
          exponent: 0
        }, {
          denom: 'fasano',
          exponent: 6
        }],
      base: 'ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7',
      name: 'Nicola Fasano Fantoken',
      display: 'fasano',
      symbol: 'FASANO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png',
          theme: {
            primary_color_hex: '#c3a59e'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Delta 9 a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
          exponent: 0
        }, {
          denom: 'd9x',
          exponent: 6
        }],
      base: 'ft575B10B0CEE2C164D9ED6A96313496F164A9607C',
      name: 'Delta 9 Fantoken',
      display: 'd9x',
      symbol: 'D9X',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png',
          theme: {
            primary_color_hex: '#0d0d0d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'FONTI a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
          exponent: 0
        }, {
          denom: 'fonti',
          exponent: 6
        }],
      base: 'ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305',
      name: 'FONTI Fantoken',
      display: 'fonti',
      symbol: 'FONTI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png',
          theme: {
            primary_color_hex: '#1c2536'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'BlackJack a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
          exponent: 0
        }, {
          denom: 'bjks',
          exponent: 6
        }],
      base: 'ft52EEB0EE509AC546ED92EAC8591F731F213DDD16',
      name: 'BlackJack Fantoken',
      display: 'bjks',
      symbol: 'BJKS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png',
          theme: {
            primary_color_hex: '#f5f5f5'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Rawanne a BitSong Music FanToken',
      denom_units: [{
          denom: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
          exponent: 0
        }, {
          denom: 'rwne',
          exponent: 6
        }],
      base: 'ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A',
      name: 'Rawanne Fantoken',
      display: 'rwne',
      symbol: 'RWNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png',
          theme: {
            primary_color_hex: '#1a1521'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Enmoda a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
          exponent: 0
        }, {
          denom: 'enmoda',
          exponent: 6
        }],
      base: 'ft85AE1716C5E39EA6D64BBD7898C3899A7B500626',
      name: 'Enmoda Fantoken',
      display: 'enmoda',
      symbol: 'ENMODA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png',
          theme: {
            primary_color_hex: '#161616'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: '404Deep Records a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
          exponent: 0
        }, {
          denom: '404dr',
          exponent: 6
        }],
      base: 'ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A',
      name: '404Deep Records Fantoken',
      display: '404dr',
      symbol: '404DR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png',
          theme: {
            primary_color_hex: '#cfb1b3'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'N43 a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
          exponent: 0
        }, {
          denom: 'n43',
          exponent: 6
        }],
      base: 'ft387C1C279D962ED80C09C1D592A92C4275FD7C5D',
      name: 'N43 Fantoken',
      display: 'n43',
      symbol: 'N43',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png',
          theme: {
            primary_color_hex: '#0a0a0a'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Puro Lobo a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
          exponent: 0
        }, {
          denom: 'lobo',
          exponent: 6
        }],
      base: 'ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB',
      name: 'Puro Lobo Fantoken',
      display: 'lobo',
      symbol: 'LOBO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png',
          theme: {
            primary_color_hex: '#b8b6b6'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Vibranium a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
          exponent: 0
        }, {
          denom: 'vibra',
          exponent: 6
        }],
      base: 'ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B',
      name: 'Vibranium Fantoken',
      display: 'vibra',
      symbol: 'VIBRA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png',
          theme: {
            primary_color_hex: '#0f0c27'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Karina a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
          exponent: 0
        }, {
          denom: 'karina',
          exponent: 6
        }],
      base: 'ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE',
      name: 'Karina Fantoken',
      display: 'karina',
      symbol: 'KARINA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png',
          theme: {
            primary_color_hex: '#21283c'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Luca Testa a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
          exponent: 0
        }, {
          denom: 'testa',
          exponent: 6
        }],
      base: 'ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12',
      name: 'Luca Testa Fantoken',
      display: 'testa',
      symbol: 'TESTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png',
          theme: {
            primary_color_hex: '#151515'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Carolina Marquez a BitSong Music FanToken',
      denom_units: [{
          denom: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
          exponent: 0
        }, {
          denom: 'cmqz',
          exponent: 6
        }],
      base: 'ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3',
      name: 'Carolina Marquez Fantoken',
      display: 'cmqz',
      symbol: 'CMQZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png',
          theme: {
            primary_color_hex: '#847760'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      deprecated: true,
      description: '[Redacted] a BitSong Music FanToken',
      denom_units: [{
          denom: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
          exponent: 0
        }, {
          denom: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00/6',
          exponent: 6
        }],
      base: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00',
      name: '[Redacted] Fantoken (ft3...A00)',
      display: 'ft347B1612A2B7659913679CF6CD45B8B130C50A00/6',
      symbol: 'LDON',
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;