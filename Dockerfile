FROM node:20.13.1-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

CMD ["node", "dist/foliogenie-latest-landing-page/server/server.mjs"]

EXPOSE 8080