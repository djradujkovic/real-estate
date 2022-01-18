FROM node:17.2.0-alpine

WORKDIR /frontend

COPY ./package*.json ./

RUN npm install --production

COPY ./ ./