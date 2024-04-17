// Imports
const express = require('express');
const path = require('path');
const cors = require('cors');
const setToken = require('./middleware/setToken')
const verifyToken = require('./middleware/verifyToken')
const verifyRole = require('./middleware/verifyRole')
const roles = require('./config/roles')
const signupRouter = require('./controllers/signup')
const loginRouter = require('./controllers/login')
const supervisorRouter = require('./controllers/supervisor')
const agentRouter = require('./controllers/agent')

// Create an Express application
const app = express();

// use cors middleware
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the React production build directory
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));

// Serve the index.html for any other routes to let React Router handle them
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// middleware to set the token to the request
app.use(setToken) 

// controllers  
app.use('/auth/signup', signupRouter)
app.use('/auth/login', loginRouter)
app.use('/supervisor', verifyToken, verifyRole(roles.supervisor), supervisorRouter)
app.use('/agent', verifyToken, verifyRole(roles.agent), agentRouter)


const port = process.env.PORT || 3000; // Use the port defined in environment variable or default to 3000

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
