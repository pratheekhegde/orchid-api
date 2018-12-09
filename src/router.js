import { combineRouters } from './helpers';
import contentRouter from './modules/content/content.routes';
import publisherRouter from './modules/publisher/publisher.routes';
import campaignRouter from './modules/campaign/campaign.routes';

const apiRoutes = combineRouters(
  contentRouter,
  publisherRouter,
  campaignRouter
);
export default apiRoutes;
