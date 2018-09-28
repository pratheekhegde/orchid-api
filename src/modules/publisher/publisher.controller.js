import { mainStory } from 'storyboard';
import PublisherRepository from './publisher.repository';

const TAG = 'App:Controller:Publisher';
const PublisherController = {};

/**
 * Get all Publishers
 * @param {ctx} Koa Context
 */
PublisherController.getAll = async ctx => {
  try {
    ctx.body = await PublisherRepository.findAll();
  } catch (err) {
    mainStory.error(TAG, `Unable to get all Publishers! Reason: ${err.name}`);
    ctx.throw(500);
  }
};

/**
 * Find a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.getById = async ctx => {
  try {
    ctx.body = await PublisherRepository.findById(ctx.params.id);
  } catch (err) {
    mainStory.error(
      TAG,
      `Publisher with id ${ctx.params.id} not found! Reason: ${err.name}`
    );
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404, 'Publisher Not found');
    } else {
      ctx.throw(500);
    }
  }
};

/**
 * Add a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.add = async ctx => {
  try {
    ctx.body = await PublisherRepository.add(ctx.request.body);
  } catch (err) {
    mainStory.error(TAG, `Unable to create new Publisher! Reason: ${err}`);
    ctx.throw(400, err);
  }
};

/**
 * Update a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.update = async ctx => {
  try {
    const Publisher = await PublisherRepository.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    if (!Publisher) {
      ctx.throw(404);
    }
    ctx.body = Publisher;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};
/**
 * Update a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.updateGivenFields = async ctx => {
  try {
    const Publisher = await PublisherRepository.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    if (!Publisher) {
      ctx.throw(404);
    }
    ctx.body = Publisher;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

/**
 * Delete a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.delete = async ctx => {
  try {
    const Publisher = await PublisherRepository.findByIdAndRemove(
      ctx.params.id
    );
    if (!Publisher) {
      ctx.throw(404);
    }
    ctx.body = Publisher;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

export default PublisherController;
