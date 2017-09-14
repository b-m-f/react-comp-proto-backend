const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/reactComponents';
let Database = null;

const init = async () => {
  Database = await MongoClient.connect(url);
  return Database;
};

const getDb = () => Database;

module.exports = {init, getDb};
