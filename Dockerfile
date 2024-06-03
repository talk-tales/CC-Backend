FROM node:18.17.1-alpine3.18

ARG DB_URL
ENV DATABASE_URL=$DATABASE_URL
ENV JWT_SECRET=$JWT_SECRET

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma migrate deploy
RUN npx prisma generate
CMD ["node", "server.js"]
EXPOSE 8080