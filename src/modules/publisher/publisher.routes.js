import Router from 'koa-router';
import PublisherController from './publisher.controller';

const publisherRouter = new Router({ prefix: '/publisher' });

// Methods

publisherRouter.get('/', PublisherController.getAll);
publisherRouter.get('/:id', PublisherController.getById);
publisherRouter.post('/', PublisherController.add);
publisherRouter.put('/:id', PublisherController.update);
publisherRouter.patch('/:id', PublisherController.updateGivenFields);
publisherRouter.delete('/:id', PublisherController.delete);

export default publisherRouter;
