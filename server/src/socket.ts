import socketIO from 'socket.io';

import Message from './api/resources/message/message.model';

const socketConnect = (server: import('http').Server): socketIO.Server => {
  const io = socketIO(server);

  io.on('connection', (socket): void => {
    console.log('User connected');

    socket.on(
      'disconnect',
      (): void => {
        console.log('User disconnected');
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

  return io;
};

export default socketConnect;
