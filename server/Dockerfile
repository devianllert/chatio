FROM node:10.15.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ENV DB_HOST=host.docker.internal

CMD [ "npm", "run", "start"]