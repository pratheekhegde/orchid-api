import Mongoose from 'mongoose';
import { mainStory } from 'storyboard';

const TAG = 'App:Main';
const connectToMongoDB = async () => {
  const dbHost = process.env.DB_HOST || 'localhost';
  const dbPort = process.env.DB_PORT || 27017;
  const dbName = process.env.DB_NAME || 'orchid-local';
  const mongoURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;
  try {
    await Mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    mainStory.info(TAG, `✅  Connected to MongoDB at ${mongoURI}`);
  } catch (err) {
    mainStory.fatal(TAG, `❌  Could not connect to MongoDB!`);
    mainStory.fatal(TAG, `❌  Reason: ${err}`);
    process.exit(1);
  }
};

export default connectToMongoDB;
