import OCAPClient from '@arcblock/ocap-js';

export const dataSources = [
  {
    name: 'btc',
    demoAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  },
  {
    name: 'eth',
    demoAddress: '0xe65d3128feafd14d472442608daf94bceb91e333',
  },
];

export const clients = dataSources.reduce((obj, ds) => {
  obj[ds.name] = new OCAPClient({
    dataSource: ds.name,
    // httpBaseUrl: 'http://47.104.23.85:8080/api', // for dev in china
    // httpBaseUrl: 'https://ocap.arcblock.io/api', // for production
    enableSubscription: true,
    enableMutation: false,
  });

  return obj;
}, {});

export function getClient(dataSource) {
  return clients[dataSource];
}
