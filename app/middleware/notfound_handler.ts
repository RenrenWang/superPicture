export default () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status !== 200) {
      ctx.body = { code: ctx.status, message: ctx.__("fail") };
    }
  };
};
