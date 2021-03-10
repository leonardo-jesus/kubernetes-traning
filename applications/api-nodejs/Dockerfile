FROM node:15.6.0-alpine3.10

ENV WDIR /process

RUN apk add --no-cache --upgrade bash

RUN mkdir -p ${WDIR}

WORKDIR ${WDIR}

COPY package*.json ./

RUN  npm install

COPY . .

CMD [ "npm", "start"]
