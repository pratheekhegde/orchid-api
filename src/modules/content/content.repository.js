import { mainStory } from 'storyboard';
import ContentModel from './content.model';
import {
  OrchidError,
  TYPE_INVALID_PAYLOAD,
  TYPE_NOT_FOUND,
  TYPE_REPO_ERROR,
  MESSAGE_INVALID_PAYLOAD,
  MESSAGE_CONTENT_NOT_FOUND,
} from '../../helpers';
const TAG = 'App:Repository:Content';
const ContentRepository = {};

/**
 * Get all contents
 */
ContentRepository.findAll = async () => {
  return ContentModel.find({ isDeleted: false });
};

ContentRepository.findById = async contentId => {
  try {
    const result = await ContentModel.findOne({
      _id: contentId,
      isDeleted: false,
    });
    if (result) {
      return result;
    } else {
      throw new OrchidError(TYPE_NOT_FOUND, MESSAGE_CONTENT_NOT_FOUND);
    }
  } catch (error) {
    throw new OrchidError(TYPE_REPO_ERROR, error);
  }
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
  const c = await ContentModel.findOne({ _id: contentId }).select('+isDeleted');
  if (c.isDeleted) {
    return false;
  } else {
    // delete the content by setting isDeleted true
    return ContentModel.updateOne({ _id: contentId }, { isDeleted: true });
  }
};

export default ContentRepository;
