FROM node
WORKDIR app/

COPY package.json .
RUN npm install

COPY . ./

EXPOSE 3045

ENV PORT 3000
ENV MONGODB_URI "mongodb://mongo:27017/product-service"

CMD ["npm", "start"]