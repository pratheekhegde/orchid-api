import { mainStory } from 'storyboard';
import 'storyboard-preset-console';
import dotenv from 'dotenv';
import initServices from './services';
import App from './App';

const TAG = 'App:Main';

// load environment variables
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

mainStory.info(TAG, 'API Server starting...');
mainStory.debug(TAG, 'logging with debug enabled!');

initServices().then(() => {
  // start server
  App.listen(PORT, () =>
    mainStory.info(
      TAG,
      `✅  The API server is running at http://localhost:${PORT}/`
    )
  );
});

// Koa error handling
// App.on('error', (err, ctx) => {
//   mainStory.error(TAG, ` Koa - Status:${err.status}, Message:${err.message}`);
//   /* centralized error handling:
//    *   console.log error
//    *   write error to log file
//    *   save error and request information to database if ctx.request match condition
//    *   ...
//   */
//   try {
//     // await new Promise(resolve => Raven.captureException(err, resolve));
//   } catch (err) {
//     // console.error('Raven error', err);
//   }
// });

// Node error handling
process.on('unhandledRejection', async err => {
  mainStory.fatal(TAG, `Node - Unhandled rejection : ${err}`);
  try {
    // await new Promise(resolve => Raven.captureException(err, resolve));
  } catch (err) {
    // console.error('Raven error', err);
  } finally {
    process.exit(1);
  }
});

process.on('uncaughtException', async err => {
  mainStory.fatal(TAG, `Node - Uncaught exception : ${err}`);
  try {
    // await new Promise(resolve => Raven.captureException(err, resolve));
  } catch (err) {
    // console.error('Raven error', err);
  } finally {
    process.exit(1);
  }
});
