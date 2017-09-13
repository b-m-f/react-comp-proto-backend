import Controllers from './Controllers';

const Routes = {
  root: app =>
    app.get('/', function(req, res) {
      res.send('Hello World!');
    }),
};

export default Routes;
