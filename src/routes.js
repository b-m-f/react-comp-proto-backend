const ComponentController = require('./controllers/componentController');
const util = require('util');
const {log} = require('./logger');

const Routes = {
  root: app =>
    app.get('/', function(req, res) {
      res.send('Hello World!');
    }),
  components: async app =>
    app.get('/component/:name', async function(req, res) {
      log(util.inspect(ComponentController.addComponent));
      const result = await ComponentController.addComponent(req.params.name);
      res.send(result);
    }),
};

module.exports = Routes;
