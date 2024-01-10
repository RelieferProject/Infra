FROM node:12-buster-slim

WORKDIR /usr/src/app
COPY index.js ./
# install express -g
RUN npm install express -g
# run index.js
CMD [ "node", "index.js" ]