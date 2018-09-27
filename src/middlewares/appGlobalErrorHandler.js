export async function AppGlobalErrorHandler(ctx, next) {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404);
    }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      status: err.status,
      message: err.status === 500 ? 'Internal Server Error' : err.message, // dont send 500 error reasons to client
    };
    ctx.app.emit('error', err, ctx);
  }
}
