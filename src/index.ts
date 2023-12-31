import express, { Express, NextFunction, Request, Response } from 'express';
import { Server } from 'http';
const app: Express = express();

import restaurant from './routes/restaurant';
import responseHandler from './middlewares/responseHandler';
import errorHandler from './middlewares/errorHandler';
import sequelize from './connections/mysql';
import logger from './middlewares/logger';
import Restaurant from './models/restaurant';
import db from './utils/db';
import restaurantSeeder from './mockData/restaurantSeeder';

app.use(logger);

// to test
app.get('/', (_, res: Response) => {
  res.status(200).json({ msg: 'Hello World!!' });
});

app.use(express.json())
app.use('/restaurant', restaurant);
app.use(responseHandler);
app.use(errorHandler);

(async function startServer() {
  try {
    console.info('Database connection is establishing...');
    await sequelize.authenticate();
    console.info('Database connection is established');

    // sync all models
    sequelize.sync().then((val) => console.log('Synced')).catch((e: Error) =>console.error(e.message));

    // start server only after database connectivity is established
    const PORT = process.env.PORT ?? 5000;
    const server: Server = app.listen(PORT, () =>
      console.log('Server is running on port ' + PORT)
    );
    // console.log({ server });

    // insert after server is started so that by the time inserts are happening requests can still be served
    // if inserts fail for some reason then error will be caught
    // although you'll see the msg 'Mock data inserted' eveytime you restart your app but it won't insert dupe records.
    await db.insertMany(restaurantSeeder).then(() => console.log('Mock data inserted')).catch((e: Error) => console.error(e.message))
  } catch (error: any) {
    console.error('Database connection failed - ', error.message);
  }
})();

// uncaught rejected promises will trigger unhandledRejection event, if it is not present then uncaughtException will be triggered
// if both are present then still unhandledRejection event will be triggered but you can pass the control to uncaughtException by further throwing the error

process.on('uncaughtException', (error: Error) => {
  console.log('uncaughtException - ', error.message);
});

process.on('unhandledRejection', (error: Error) => {
  console.log('unhandledRejection - ', error.message);
  // throw new Error(error.name + '- ' + error.message); // passing the control to uncaughtException
  throw error;
});

process.on('SIGINT', () => {
  console.log('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('SIGTERM');
});
