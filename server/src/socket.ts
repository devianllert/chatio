import { Socket } from 'socket.io';

// import messageController from './api/resources/message/message.controller';

const connection = (socket: Socket): Socket => {
  console.log('User connected');

  socket.on(
    'disconnect',
    (): void => {
      console.log('user disconnected');
    },
  );

  socket.on(
    'ADD_MESSAGE',
    (message: string): void => {
      console.log(message);
    },
  );

  return socket;
};

export default connection;
