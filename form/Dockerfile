# Stage 1: Build the Vite app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN yarn build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine AS serve

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
