# Use an official Node.js image as a build step
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Use a lighter image for serving the build (Nginx in this case)
FROM nginx:alpine

# Copy the build output to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Command to run Nginx (default)
CMD ["nginx", "-g", "daemon off;"]