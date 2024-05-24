import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreumtestnet',
      client_id: '07-tendermint-104',
      connection_id: 'connection-69'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3529',
      connection_id: 'connection-3094'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7894',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;