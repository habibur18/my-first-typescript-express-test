import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.MONGODB_URL as string);
    app.listen(config.PORT, function () {
      console.log(`CORS-enabled web server listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log('get error in server.ts', err);
  }
}
main();
