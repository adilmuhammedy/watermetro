// backend.js

const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Define an API endpoint to handle the form submission
app.post('/bookticket', (req, res) => {
  const { from, to, ticketType, passengerCount } = req.body;

  // Process the data and perform necessary operations
  // ...
  console.log('Form submitted:', { from, to, ticketType, passengerCount });

  // Return a response
  res.json({ message: 'Form submitted successfully' });
});

// Start the server
app.listen(4000, () => {
  console.log('Backend server is running on port 4000');
});
