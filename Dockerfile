FROM node:latest as node
WORKDIR /app
COPY . ./
RUN npm install
EXPOSE 4200
CMD npm run start