module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///smokeapp'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};