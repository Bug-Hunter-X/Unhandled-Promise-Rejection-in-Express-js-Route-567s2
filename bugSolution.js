const express = require('express');
const app = express();

// Simulate an asynchronous operation that may fail
const someAsyncOperation = async () => {
  // Simulate a potential error
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
};

app.get('/', async (req, res) => {
  try {
    const result = await someAsyncOperation();
    res.send(result);
  } catch (error) {
    console.error('Error during async operation:', error);
    res.status(500).send('Internal Server Error'); // Send a proper error response to the client
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));