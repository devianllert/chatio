import http from 'http';
import express, { Application } from 'express';
import socketIO from 'socket.io';
import dotenv from 'dotenv';

import { connectDB } from './config/db';
import router from './api/router';

import Message from './api/resources/message/message.model';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.set('port', process.env.PORT || 3001);
app.set('env', process.env.NODE_ENV);

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket): void => {
  console.log('User connected');

  socket.on(
    'disconnect',
    (): void => {
      console.log('user disconnected');
    },
  );

  socket.on(
    'ADD_MESSAGE',
    async (text: string): Promise<void> => {
      const message = await Message.create({
        author: 'Anonyomus',
        message: text,
      });

      io.emit('ADD_MESSAGE', message);
    },
  );

  socket.on(
    'LOAD_MESSAGES',
    async (): Promise<void> => {
      const message = await Message.findAll();

      io.emit('LOAD_MESSAGES', message);
    },
  );
});

server.listen(
  app.get('port'),
  (): void => {
    connectDB();

    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
  },
);
