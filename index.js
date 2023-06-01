const express = require('express');
const app = express();
const economicSystemRoutes = require('./routes/economicSystem');

// Middleware
app.use(express.json());

// Routes
app.use('/api/economicSystem', economicSystemRoutes);

// Hello World route
app.get('/helloworld', (req, res) => {
    res.send('Hello, World!');
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});