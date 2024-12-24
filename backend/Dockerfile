# Use the official Node.js 18 image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port dynamically based on ENV variable
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
