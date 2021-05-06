FROM node:latest
WORKDIR /srv

COPY package.json ./
COPY data ./
COPY public ./
COPY src ./

RUN yarn \
  && yarn start
