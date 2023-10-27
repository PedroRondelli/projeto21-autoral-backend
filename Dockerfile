FROM node:18.18.2 as development_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate


EXPOSE 5000

CMD ["npm","run","dev"]

FROM node:18.18.2-alpine3.17 as production_image

WORKDIR /usr/src/app





