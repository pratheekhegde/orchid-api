import combineRouters from 'koa-combine-routers';
import contentRouter from './modules/content/content.routes';
import publisherRouter from './modules/publisher/publisher.routes';

const apiRoutes = combineRouters(contentRouter, publisherRouter);
export default apiRoutes;
