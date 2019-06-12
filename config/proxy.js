module.exports = {
  useMockStatusCode: [404, 403, 500],
  rules: {
    h5maker: {
      host: 'http://api.kylinmp.cn',
      urls:[
        '/v1/*'
      ],
    },
  },
  user: {
    account: 'admin',
    password: '123456',
  },
};
