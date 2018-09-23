import Router from 'koa-router';

const publisherRouter = new Router({ prefix: '/publisher' });

publisherRouter.get('/', (ctx, next) => {
  ctx.body = 'Hello from pub';
});

export default publisherRouter;
