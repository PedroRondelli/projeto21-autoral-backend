FROM node:18.18.2 as development_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["npm","run","dev"]

FROM development_stage as builder

WORKDIR /usr/src/app

RUN npm run build

FROM node:18.18.2-alpine3.17 as production_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./

COPY --from=builder /usr/src/app/prisma ./prisma






