import Router from 'koa-router';
import ContentController from './publisher.controller';

const publisherRouter = new Router({ prefix: '/publisher' });

// Methods

publisherRouter.get('/', ContentController.getAll);
publisherRouter.get('/:id', ContentController.getById);
publisherRouter.post('/', ContentController.add);
publisherRouter.put('/:id', ContentController.update);
publisherRouter.patch('/:id', ContentController.updateGivenFields);
publisherRouter.delete('/:id', ContentController.delete);

export default publisherRouter;
