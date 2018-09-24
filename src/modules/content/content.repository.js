import { mainStory } from 'storyboard';
import ContentModel from './content.model';

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

ContentRepository.update = async content => {
  // [TODO]
};

ContentRepository.delete = async contentId => {
  // [TODO]
};

export default ContentRepository;
