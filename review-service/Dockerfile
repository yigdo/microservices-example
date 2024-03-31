FROM node
WORKDIR app/

COPY package.json .
RUN npm install

COPY . ./

EXPOSE 3046

ENV PORT 3001
ENV MONGODB_URI "mongodb://mongo:27017/review-service"

CMD ["npm", "start"]