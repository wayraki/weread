FROM node:latest AS installer
WORKDIR /srv

COPY package.json yarn.lock ./
COPY data data ./
COPY public public ./
COPY src src ./

RUN yarn \
  && yarn start
