FROM node:18-alpine
WORKDIR /react_quiz
COPY package*.json /react_quiz/
RUN npm install
COPY . /react_quiz/
CMD [ "npm", "run", "dev" ]
EXPOSE 3000

