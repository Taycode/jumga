FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV CI=true

EXPOSE 3001

CMD ["npm", "start"]
