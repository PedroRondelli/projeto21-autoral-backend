FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY ..

EXPOSE 5000

RUN npm run dev

CMD ['node','server.js']