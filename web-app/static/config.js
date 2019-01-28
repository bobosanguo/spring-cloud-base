/*
 在 index.html 引入
 2018-04-17
 */

window.serverconf = {
  appId: 'test',
  appSecret: 'test',
  production: {
    // nginx 代理
    baseUrl: 'http://10.254.4.50:8008',
    authUrl: 'http://10.254.4.50:8008/auth',
    baseURL: 'http://10.254.4.50:8008'
  },
  development: {
    baseUrl: 'http://ecloud.10086.cn:8008',
    authUrl: 'http://ecloud.10086.cn:18001/auth',
    baseURL: 'http://ecloud.10086.cn:18000'
  }
}
