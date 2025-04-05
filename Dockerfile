FROM node:22.14.0-alpine

WORKDIR /app

COPY package.json /app/
#COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

RUN yarn global add serve

EXPOSE 3000
CMD ["serve", "-s", "build"]