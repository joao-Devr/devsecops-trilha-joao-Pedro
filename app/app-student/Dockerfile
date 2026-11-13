FROM node:24-slim

WORKDIR /app

RUN npm install -g npm@latest

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3000

USER node

CMD ["node", "src/server.js"]
