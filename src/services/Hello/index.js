const Koa = require("koa");
const Router = require("@koa/router");

const handler = require("./handler");

const app = new Koa();
const router = new Router();

router.get("/hello", handler);

app
  .use(router.routes())
  .use(router.allowedMethods());

const plugin = {
  "path": "/api",
  "service": app
};

module.exports = plugin;
