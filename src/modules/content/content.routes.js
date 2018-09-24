import Router from 'koa-router';
import ContentController from './content.controller';

const contentRouter = new Router({ prefix: '/content' });

// Methods

contentRouter.get('/', ContentController.getAll);
contentRouter.get('/:id', ContentController.getById);
contentRouter.post('/', ContentController.add);
contentRouter.put('/:id', ContentController.update);
contentRouter.patch('/:id', ContentController.updateGivenFields);
contentRouter.delete('/:id', ContentController.delete);

export default contentRouter;
