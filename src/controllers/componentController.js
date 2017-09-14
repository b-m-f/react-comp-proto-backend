const {getDb} = require('../database');
const assert = require('assert');
const {log} = require('../logger');

const ComponentController = {
  addComponent: async component => {
    log(component);
    //TODO: make sure that component has all required fields, otherwise return false
    // const {name, author, componentString, jsx, description, tags} = component;
    const db = getDb();
    const collection = db.collection('components');
    collection.insert(component, function(err, result) {
      if (err) return false;
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      log('Inserted 1 component into the collection');
    });
    return true;
  },

  getComponent: async id => {
    return id;
  },
};

module.exports = ComponentController;
