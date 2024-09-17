// Import the required modules
const express = require('express'); // Import the Express framework to create a web server
const dotenv = require('dotenv');   // Import dotenv to manage environment variables
const path = require('path');       // Import path module for working with file and directory paths

// Configure environment variables
dotenv.config(); // Loads environment variables from a .env file into process.env

// Create an instance of an Express application
const app = express(); // Initialize an Express application

// Set up the view engine
app.set('view engine', 'ejs'); // Set 'ejs' as the template engine to render EJS files
app.set('views', path.join(__dirname, 'views')); // Set the directory where the view files (EJS templates) are located

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 
// Tell Express to serve static files (like CSS, JavaScript, and images) from the 'public' directory
// This means any files in 'public' will be accessible directly from the root URL

// Import routes
const routes = require('./routes/index'); // Import the main router from the 'routes' directory's 'index.js' file

// Use the imported routes
app.use('/', routes); 
// Mount the router on the root URL path ('/')
// This tells the app to use the routes defined in 'index.js' for any requests starting with '/'

// Export the Express app instance
module.exports = app; 
// Export the app so it can be used elsewhere (like in the server.js file to start the server)
