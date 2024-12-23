# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only the package.json and lock file first
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose port for development
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
