const fortune = require('fortune');
const postgresAdapter = require('fortune-postgres');

const recordTypes = require('./types');

const store = fortune(recordTypes, {
  adapter: [
    postgresAdapter,
    {
      url: 'postgresql://postgres:mysecretpassword@localhost:5432/pix',
      typeMap: {
        membership: 'memberships',
        organization: 'organizations',
        user: 'users',
      },
      primaryKeyType: Number,
      generatePrimaryKey: null
    }
  ],
  hooks: require('./hooks')
});

module.exports = store;
