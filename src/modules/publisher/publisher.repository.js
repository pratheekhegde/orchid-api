import { mainStory } from 'storyboard';
import PublisherModel from './publisher.model';

const TAG = 'App:Repository:Publisher';
const PublisherRepository = {};

/**
 * Get all contents
 */
PublisherRepository.findAll = async () => {
  return PublisherModel.find();
};

PublisherRepository.findById = async publisherId => {
  return PublisherModel.findById(contentId);
};

/**
 * Get all contents
 * @param {content} Content Object
 */
PublisherRepository.add = async publisher => {
  return PublisherModel(content).save();
};

PublisherRepository.update = async publisher => {
  // [TODO]
};

PublisherRepository.delete = async publisherId => {
  // [TODO]
};

export default PublisherRepository;
