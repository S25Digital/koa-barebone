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
middlewares.forEach(mw => {
  app.use(mw);
});

/**
 * Mount all the services on the umbrella app
 */
services.forEach(svc => {
  app.use(mount(svc.path, svc.service));
});

module.export = app;
