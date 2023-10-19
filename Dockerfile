FROM node:18 as development_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY ..

EXPOSE 5000

RUN npm run dev

CMD ['node','server.js']

FROM development_stage as production_stage

