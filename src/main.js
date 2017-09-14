const express = require('express');
const Routes = require('./routes.mjs');
const DatabaseAdapter = require('./database');
const {log} = require('./logger');

const app = express();
DatabaseAdapter.init();

(function initializeRoutes() {
  for (let route in Routes) {
    Routes[route](app);
  }
})();

app.listen(3000, function() {
  log('Component server listening on port 3000!');
});
