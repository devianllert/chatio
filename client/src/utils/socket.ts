import socketIO from 'socket.io-client';

const connect = (endpoint: string): SocketIOClient.Socket => socketIO(endpoint);

export default connect('localhost:3001');
