//call models
const express = require('express');
const app = express();

// Import route files
const employeesRouter = require('./routes/employees');
const managersRouter = require('./routes/managers');

// Middleware to parse JSON
app.use(express.json());

// Use the routers
app.use('/employees', employeesRouter);
app.use('/managers', managersRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PICK 'n STEAL server running on port ${PORT}`);
});