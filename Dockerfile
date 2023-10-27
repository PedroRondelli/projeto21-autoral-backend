FROM node:18.18.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate


EXPOSE 5000

CMD ["npm","run","dev"]



