import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  baseAPI: 'http://localhost:8080',
  auth_uri: 'http://localhost:9090',
  clientSecret: 'hVPZUSkkXmbjk6ytoldIEf1d04LtqUlg',
  clientId: 'vegetable_shop',
  scopes: 'READ',
  callback_uri: 'http://localhost:5000'
};
