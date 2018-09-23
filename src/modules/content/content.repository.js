import ContentModel from './content.model';

class ContentRepository {
  async find(ctx) {
    ctx.body = await ContentModel.find();
  }

  async findById(ctx) {
    try {
      const content = await ContentModel.findById(ctx.params.id);
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
  }

  async add(ctx) {
    try {
      const content = await new content(ctx.request.body).save();
      ctx.body = content;
    } catch (err) {
      ctx.throw(422);
    }
  }

  async update(ctx) {
    try {
      const content = await ContentModel.findByIdAndUpdate(
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
  }

  async delete(ctx) {
    try {
      const content = await ContentModel.findByIdAndRemove(ctx.params.id);
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
  }
}

export default new ContentRepository();
