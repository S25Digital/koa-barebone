const Koa = require("koa");
const cors = require("@koa/cors");
const bodyparser = require("koa-bodyparser");
const mount = require("koa-mount");
const loggerMw = require("koa-mw-logger");

const middlewares = require("./middlewares");
const services = require("./services");

const app = new Koa();

app.use(cors());
app.use(bodyparser());
app.use(loggerMw());

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

module.exports = app;
