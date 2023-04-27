FROM node:18.2.0-bullseye-slim

WORKDIR /app

COPY ./app/package.json ./

RUN npm install

COPY ./app .

EXPOSE 3000

CMD npm run dev