const routes = {
  root: app =>
    app.get('/', function(req, res) {
      res.send('Hello World!');
    }),
};

module.exports = routes;
