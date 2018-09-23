import ContentRepository from './content.repository';

const ContentController = {};

/**
 * Get all contents
 * @param {ctx} Koa Context
 */
ContentController.getAll = async ctx => {
  // ctx.body = await ContentRepository.find();
  ctx.body = { data: 1 };
};

/**
 * Find a content
 * @param {ctx} Koa Context
 */
ContentController.getOne = async ctx => {
  try {
    const content = await ContentRepository.findById(ctx.params.id);
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
 * Add a content
 * @param {ctx} Koa Context
 */
ContentController.add = async ctx => {
  try {
    const content = await new content(ctx.request.body).save();
    ctx.body = content;
  } catch (err) {
    ctx.throw(422);
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
