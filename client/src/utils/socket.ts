import socketIO from 'socket.io-client';

const connect = (endpoint: string): SocketIOClient.Socket => socketIO(endpoint, {
  autoConnect: false,
});

export default connect('localhost:3001');
