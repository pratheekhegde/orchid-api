import { mainStory } from 'storyboard';
import Koa from 'koa';
import Logger from 'koa-logger';
import Mount from 'koa-mount';
import Json from 'koa-json';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import ApiRoutes from './router';
import { AppGlobalErrorHandler } from './middlewares/appGlobalErrorHandler';
const TAG = 'App:Main';
const app = new Koa();

// Global error hanler and message format
app.use(AppGlobalErrorHandler);

app.use(Helmet());
app.use(Logger());
app.use(Cors());
app.use(BodyParser());
app.use(Json());

// register API Routes.
app.use(Mount('/api', ApiRoutes()));

export default app;
