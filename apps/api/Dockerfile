FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

#The following is for k8s
# Expose the desired port (e.g., 5000)
EXPOSE 4000

# Command to run the application
CMD ["npm", "run", "start:dev", "api"]