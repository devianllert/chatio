# Chat App

A project that runs a Node server and a create-react-app app via two separate containers, using Docker Compose.

## Development

### Server

```
cd server
npm install
```

```
npm run dev 
```

### Client

```
cd client
npm install
```

```
npm start
```

## Production

```
docker-compose build
docker-compose up
```