import express from 'express';
import Routes from './routes.mjs';
import DatabaseAdapter from './database';
import log from './logger';

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
