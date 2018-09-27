import { mainStory } from 'storyboard';
import ContentRepository from './content.repository';
import {
  TYPE_INVALID_PAYLOAD,
  MESSAGE_CONTENT_UPDATED,
  MESSAGE_CONTENT_NOT_UPDATED,
  MESSAGE_CONTENT_NOT_FOUND,
  MESSAGE_CONTENT_DELETED,
  MESSAGE_CONTENT_NOT_DELETED,
  TYPE_NOT_FOUND,
} from '../../helpers';

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
    if (err.type === TYPE_NOT_FOUND) {
      ctx.throw(404, err.message);
    } else {
      ctx.throw(404);
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
    ctx.status = 201;
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
    const response = await ContentRepository.update(
      ctx.params.id,
      ctx.request.body
    );
    // if any documents were updated then return success
    if (response.nModified > 0) {
      ctx.status = 201;
      ctx.body = {
        success: true,
        message: MESSAGE_CONTENT_UPDATED,
      };
    } else {
      ctx.body = {
        success: false,
        message: MESSAGE_CONTENT_NOT_UPDATED,
      };
    }
  } catch (err) {
    // if invalid payload then send 400
    if (err.type === TYPE_INVALID_PAYLOAD) {
      ctx.throw(400, err.message);
    } else {
      ctx.throw(500);
    }
  }
};

/**
 * Delete a content
 * @param {ctx} Koa Context
 */
ContentController.delete = async ctx => {
  try {
    const success = await ContentRepository.delete(ctx.params.id);
    // if any documents were updated then return success
    if (success) {
      ctx.body = 200;
      ctx.body = {
        success: true,
        message: MESSAGE_CONTENT_DELETED,
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        success: false,
        message: MESSAGE_CONTENT_NOT_DELETED,
      };
    }
  } catch (err) {
    ctx.throw(500);
  }
};

export default ContentController;
