import { mainStory } from 'storyboard';
import ContentRepository from './content.repository';

const TAG = 'App:Controller:Content';
const ContentController = {};

/**
 * Get all contents
 * @param {ctx} Koa Context
 */
ContentController.getAll = async ctx => {
  try {
    ctx.body = await ContentRepository.findAll();
  } catch (err) {
    mainStory.error(TAG, `Unable to get all Contents! Reason: ${err.name}`);
    ctx.throw(500);
  }
};

/**
 * Find a content
 * @param {ctx} Koa Context
 */
ContentController.getById = async ctx => {
  try {
    ctx.body = await ContentRepository.findById(ctx.params.id);
  } catch (err) {
    mainStory.error(
      TAG,
      `Content with id ${ctx.params.id} not found! Reason: ${err.name}`
    );
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404, 'Content Not found');
    } else {
      ctx.throw(500);
    }
  }
};

/**
 * Add a content
 * @param {ctx} Koa Context
 */
ContentController.add = async ctx => {
  try {
    ctx.body = await ContentRepository.add(ctx.request.body);
  } catch (err) {
    mainStory.error(TAG, `Unable to create new content! Reason: ${err}`);
    ctx.throw(400, err);
  }
};

/**
 * Update a content
 * @param {ctx} Koa Context
 */
ContentController.update = async ctx => {
  try {
    const content = await ContentRepository.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    if (!content) {
      ctx.throw(404);
    }
    ctx.body = content;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};
/**
 * Update a content
 * @param {ctx} Koa Context
 */
ContentController.updateGivenFields = async ctx => {
  try {
    const content = await ContentRepository.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    if (!content) {
      ctx.throw(404);
    }
    ctx.body = content;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

/**
 * Delete a content
 * @param {ctx} Koa Context
 */
ContentController.delete = async ctx => {
  try {
    const content = await ContentRepository.findByIdAndRemove(ctx.params.id);
    if (!content) {
      ctx.throw(404);
    }
    ctx.body = content;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
};

export default ContentController;
