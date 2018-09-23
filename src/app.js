import { mainStory } from 'storyboard';
import Koa from 'koa';
import Logger from 'koa-logger';
import Mount from 'koa-mount';
import Json from 'koa-json';
import Cors from '@koa/cors';
import BodyParser from 'koa-bodyparser';
import Helmet from 'koa-helmet';
import ApiRoutes from './router';

const TAG = 'App:Boot';
const app = new Koa();

app.use(Helmet());
app.use(Logger());
app.use(Cors());
app.use(BodyParser());
app.use(Json());

// register API Routes.
app.use(Mount('/api', ApiRoutes()));

export default app;
