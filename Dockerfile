FROM node:18 as development_stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

# RUN npx prisma migrate dev --name init 

EXPOSE 5000

CMD ["npm","start"]



