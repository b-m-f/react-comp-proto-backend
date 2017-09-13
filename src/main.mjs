import express from 'express';
import util from 'util';
import Routes from './Routes';

const app = express();

(function initializeRoutes() {
  for (route in Routes) {
    Routes[route](app);
  }
})();

app.listen(3000, function() {
  console.log('Component server listening on port 3000!');
});
