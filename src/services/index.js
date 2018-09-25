import connectToMongoDB from './mongodb';
import { mainStory } from 'storyboard';

const TAG = 'App:Main';

const initServices = async () => {
  mainStory.info(TAG, `Connecting to MongoDB...`);
  await connectToMongoDB();
};

export default initServices;
