FROM node:latest
WORKDIR /srv

COPY package.json /srv/
COPY data /srv/
COPY public /srv/
COPY src /srv/

RUN npm install \
  && npm start
