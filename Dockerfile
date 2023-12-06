FROM node:18.17.1

# All project files are in ./backend
WORKDIR /usr/src/app

# Copy everything from ../a01/backend (local) to /backend (container)
COPY ../a01/backend /usr/src/app/backend

# CD into /backend
WORKDIR /usr/src/app/backend

# Install dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "server"]