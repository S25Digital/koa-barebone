const Koa = require("koa");
const cors = require("@koa/cors");
const bodyparser = require("koa-bodyparser");
const mount = require("koa-mount");

const app = new Koa();

app.use(cors());
app.use(bodyparser());

/**
 * Mount all the middlewares on the umbrella app
 */
Reflect.ownKeys(middlewares).forEach(item => {
  app.use(middlewares[item]);
});

/**
 * Mount all the services on the umbrella app
 */
Reflect.ownKeys(services).forEach(item => {
  const svc = services[item];
  app.use(mount(svc.path, svc.service));
});

module.export = app;
