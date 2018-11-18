import { mainStory } from 'storyboard';
import PublisherModel from './publisher.model';
import {
  OrchidError,
  TYPE_INVALID_PAYLOAD,
  TYPE_NOT_FOUND,
  TYPE_REPO_ERROR,
  MESSAGE_INVALID_PAYLOAD,
  MESSAGE_PUBLISHER_NOT_FOUND,
} from '../../helpers';
const TAG = 'App:Repository:Publisher';
const PublisherRepository = {};

/**
 * Get all publishers
 */
PublisherRepository.findAll = async () => {
  return PublisherModel.find({ isDeleted: false });
};

PublisherRepository.findById = async publisherId => {
  try {
    const result = await PublisherModel.findOne({
      _id: publisherId,
      isDeleted: false,
    });
    if (result) {
      return result;
    } else {
      throw new OrchidError(TYPE_NOT_FOUND, MESSAGE_PUBLISHER_NOT_FOUND);
    }
  } catch (error) {
    throw new OrchidError(TYPE_REPO_ERROR, error);
  }
};

/**
 * Get all publishers
 * @param {publisher} Publisher Object
 */
PublisherRepository.add = async publisher => {
  return PublisherModel(publisher).save();
};

PublisherRepository.update = async (publisherId, publisher) => {
  // remove id field if exists
  delete publisher._id;

  // if there is nothing to update throw error
  if (Object.keys(publisher).length === 0) {
    throw new OrchidError(TYPE_INVALID_PAYLOAD, MESSAGE_INVALID_PAYLOAD);
  }

  // update the publisher
  return PublisherModel.updateOne({ _id: publisherId }, publisher);
};

PublisherRepository.delete = async publisherId => {
  const p = await PublisherModel.findOne({ _id: publisherId }).select(
    '+isDeleted'
  );
  if (p.isDeleted) {
    return false;
  } else {
    // delete the content by setting isDeleted true
    return PublisherModel.updateOne({ _id: publisherId }, { isDeleted: true });
  }
};

export default PublisherRepository;
