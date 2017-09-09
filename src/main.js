const express = require('express');
const app = express();
const util = require('util');

(function initializeRoutes() {
  const routes = require('./routes');
  for (route in routes) {
    routes[route](app);
  }
})();

app.listen(3000, function() {
  console.log('Component server listening on port 3000!');
});
