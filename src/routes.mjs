import ComponentController from './controllers/componentController';

const Routes = {
  root: app =>
    app.get('/', function(req, res) {
      res.send('Hello World!');
    }),
  components: app =>
    app.get('/component/:name', function(req, res) {
      res.send(req.params.name);
    }),
};

export default Routes;
