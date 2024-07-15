# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src

# Copy all the content
COPY . .

# change work directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install

# Link the local libraries
WORKDIR /usr/src

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app/index.js"]