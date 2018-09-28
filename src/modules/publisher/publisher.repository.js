import { mainStory } from 'storyboard';
import PublisherModel from './publisher.model';

const TAG = 'App:Repository:Publisher';
const PublisherRepository = {};

/**
 * Get all publishers
 */
PublisherRepository.findAll = async () => {
  return PublisherModel.find();
};

PublisherRepository.findById = async publisherId => {
  return PublisherModel.findById(publisherId);
};

/**
 * Get all publishers
 * @param {publisher} Publisher Object
 */
PublisherRepository.add = async publisher => {
  return PublisherModel(publisher).save();
};

PublisherRepository.update = async publisher => {
  // [TODO]
};

PublisherRepository.delete = async publisherId => {
  // [TODO]
};

export default PublisherRepository;
