const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;
app.use(cors({ origin: '*' }));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Define a route for the backend API
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello this is coming from backend',
    timestamp: new Date().toISOString()
  };
  res.json(data);
});

// app.use(cors({ origin: '*' }));
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
