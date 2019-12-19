async function mw(ctx, next) {
  // add middleware logic here
  await next();
}

module.exports = mw;
