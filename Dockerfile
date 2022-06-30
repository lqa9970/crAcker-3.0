FROM node:alpine
WORKDIR /
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start"]
