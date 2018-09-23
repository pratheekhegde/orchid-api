import connectToMongoDB from './mongodb';
import { mainStory } from 'storyboard';

const TAG = 'App:Boot';

const initServices = async () => {
  mainStory.info(TAG, `Connecting to MongoDB...`);
  await connectToMongoDB();
};

export default initServices;
