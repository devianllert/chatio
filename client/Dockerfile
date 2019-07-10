FROM node:10.15.3-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "-s", "-l", "3000", "dist"]