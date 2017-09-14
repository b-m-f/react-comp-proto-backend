import ComponentController from './controllers/componentController';
import util from 'util';

const Routes = {
  root: app =>
    app.get('/', function(req, res) {
      res.send('Hello World!');
    }),
  components: async app =>
    app.get('/component/:name', async function(req, res) {
      console.log(util.inspect(ComponentController.addComponent));
      const result = await ComponentController.addComponent(req.params.name);
      res.send(result);
    }),
};

export default Routes;
