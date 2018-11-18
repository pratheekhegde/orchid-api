import { mainStory } from 'storyboard';
import PublisherRepository from './publisher.repository';
import {
  TYPE_INVALID_PAYLOAD,
  MESSAGE_PUBLISHER_UPDATED,
  MESSAGE_PUBLISHER_NOT_UPDATED,
  MESSAGE_PUBLISHER_NOT_FOUND,
  MESSAGE_PUBLISHER_DELETED,
  MESSAGE_PUBLISHER_NOT_DELETED,
  TYPE_NOT_FOUND,
} from '../../helpers';

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
    if (err.type === TYPE_NOT_FOUND) {
      ctx.throw(404, err.message);
    } else {
      ctx.throw(404);
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
    mainStory.error(TAG, `Unable to create new publisher! Reason: ${err}`);
    ctx.throw(400, err);
  }
};

/**
 * Update a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.update = async ctx => {
  try {
    const response = await PublisherRepository.update(
      ctx.params.id,
      ctx.request.body
    );

    // if any documents were updated then return success
    if (response.nModified > 0) {
      ctx.status = 201;
      ctx.body = {
        success: true,
        PUBLISHER: MESSAGE_PUBLISHER_UPDATED,
      };
    } else {
      ctx.body = {
        success: false,
        PUBLISHER: MESSAGE_PUBLISHER_NOT_UPDATED,
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
 * Delete a Publisher
 * @param {ctx} Koa Context
 */
PublisherController.delete = async ctx => {
  try {
    const success = await PublisherRepository.delete(ctx.params.id);
    // if any documents were updated then return success
    if (success) {
      ctx.body = 200;
      ctx.body = {
        success: true,
        PUBLISHER: MESSAGE_PUBLISHER_DELETED,
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        success: false,
        PUBLISHER: MESSAGE_PUBLISHER_NOT_DELETED,
      };
    }
  } catch (err) {
    ctx.throw(500);
  }
};

export default PublisherController;
