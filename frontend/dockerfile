FROM node:16.13.2

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install -g npm

COPY . .

EXPOSE 7000

CMD [ "npm", "start" ]
