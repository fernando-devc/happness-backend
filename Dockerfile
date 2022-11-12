FROM node:16.18.1-bullseye-slim

WORKDIR /app

COPY . .

RUN yarn install && yarn run build

CMD [ "yarn", "start" ]
