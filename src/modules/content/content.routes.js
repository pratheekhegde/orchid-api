import Router from 'koa-router';
import ContentController from './content.controller';

const contentRouter = new Router({ prefix: '/content' });

// Methods
contentRouter.get('/', ContentController.getAll);
contentRouter.get('/:id', ContentController.getOne);

export default contentRouter;
