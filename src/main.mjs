import express from 'express';
import util from 'util';
import routes from './routes';

const app = express();

(function initializeRoutes() {
  for (route in routes) {
    routes[route](app);
  }
})();

app.listen(3000, function() {
  console.log('Component server listening on port 3000!');
});
