import { mainStory } from 'storyboard';
import Koa from 'koa';
import Logger from 'koa-logger';
import Mount from 'koa-mount';
import Json from 'koa-json';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import ApiRoutes from './router';

const TAG = 'App:Main';
const app = new Koa();

// Global error hanler and message format
app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404, 'Endpoint not found');
    }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      status: err.status,
      message: err.message,
    };
    ctx.app.emit('error', err, ctx);
  }
});

app.use(Helmet());
app.use(Logger());
app.use(Cors());
app.use(BodyParser());
app.use(Json());

// register API Routes.
app.use(Mount('/api', ApiRoutes()));

export default app;
