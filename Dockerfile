# Use the official Node.js image as the base image
FROM node:20.13-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the built application
RUN npm install -g serve

# Set the environment variable for Serve to use the build folder
ENV REACT_APP_BUILD_FOLDER=/app/build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build"]
