import { mainStory } from 'storyboard';
import ContentModel from './content.model';
import {
  OrchidError,
  TYPE_INVALID_PAYLOAD,
  MESSAGE_INVALID_PAYLOAD,
} from '../../helpers';
const TAG = 'App:Repository:Content';
const ContentRepository = {};

/**
 * Get all contents
 */
ContentRepository.findAll = async () => {
  return ContentModel.find();
};

ContentRepository.findById = async contentId => {
  return ContentModel.findById(contentId);
};

/**
 * Get all contents
 * @param {content} Content Object
 */
ContentRepository.add = async content => {
  return ContentModel(content).save();
};

ContentRepository.update = async (contentId, content) => {
  // remove id field if exists
  delete content._id;

  // if there is nothing to update throw error
  if (Object.keys(content).length === 0) {
    throw new OrchidError(TYPE_INVALID_PAYLOAD, MESSAGE_INVALID_PAYLOAD);
  }

  // update the content
  return ContentModel.updateOne({ _id: contentId }, content);
};

ContentRepository.delete = async contentId => {
  // [TODO]
};

export default ContentRepository;
