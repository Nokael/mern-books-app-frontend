{
    "name": "book-store",
    "version": "1.0.0",
    "description": "This is a book keeping application",
    "main": "server.js",
    "scripts": {
      "start": "node backend/server.js",
      "server": "nodemon backend/server.js",
      "client": "npm start --prefix frontend",
      "dev": "concurrently \" npm run client\" \"npm run server\""
    },
    "author": "Joe",
    "license": "MIT",
    "engines": {
      "node": "18.15.0"
    },
    "dependencies": {
      "bcryptjs": "^2.4.3",
      "concurrently": "^8.0.1",
      "dotenv": "^16.0.3",
      "express": "^4.18.2",
      "express-async-handler": "^1.2.0",
      "jsonwebtoken": "^9.0.0",
      "mongoose": "^7.0.4",
      "react-scroll": "^1.8.9"
    }
  }
  