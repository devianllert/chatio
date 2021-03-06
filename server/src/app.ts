import http from 'http';
import express, { Application } from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db';
import socketConnect from './socket';

import router from './api/router';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.set('port', process.env.PORT || 3001);
app.set('env', process.env.NODE_ENV);

const server = http.createServer(app);

socketConnect(server);

server.listen(
  app.get('port'),
  (): void => {
    connectDB();

    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
  },
);
