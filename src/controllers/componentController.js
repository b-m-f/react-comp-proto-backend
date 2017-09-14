const {getDb} = require('../database');
const assert = require('assert');
const {log} = require('../logger');

const ComponentController = {
  addComponent: async component => {
    log(component);
    return true;
    // const {name, author, componentString, jsx, description, tags} = component;
  },

  getComponent: async id => {
    const db = getDb();
    // Get the documents collection
    const collection = db.collection('test');
    // Insert some documents
    collection.insertMany([{a: 1}, {a: 2}, {a: 3}], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      log('Inserted 3 documents into the collection');
    });
    return id;
  },
};

module.exports = ComponentController;
