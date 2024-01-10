FROM node:12-buster-slim

WORKDIR /usr/src/app
COPY package*.json ./
COPY index.js ./
RUN npm install
# run index.js
CMD [ "node", "index.js" ]