FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

#The following is for k8s
# Command to run the application
CMD ["npm", "run", "start:dev", "todolist"]