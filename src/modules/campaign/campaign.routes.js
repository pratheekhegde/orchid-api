import Router from 'koa-router';
import CampaignController from './campaign.controller';

const campaignRouter = new Router({ prefix: '/campaign' });

// Methods

campaignRouter.get('/', CampaignController.getAll);
campaignRouter.get('/:id', CampaignController.getById);
campaignRouter.post('/', CampaignController.add);
campaignRouter.put('/:id', CampaignController.update);
campaignRouter.patch('/:id', CampaignController.update);
campaignRouter.delete('/:id', CampaignController.delete);

export default campaignRouter;
