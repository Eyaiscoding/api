FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

# Command to run the application
CMD ["npm", "run", "start:dev", "api"]

#Triggering commit