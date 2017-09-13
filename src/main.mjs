import express from 'express';
import Routes from './routes.mjs';

const app = express();

(function initializeRoutes() {
  for (let route in Routes) {
    Routes[route](app);
  }
})();

app.listen(3000, function() {
  console.log('Component server listening on port 3000!');
});
