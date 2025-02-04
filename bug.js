const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result); // Sending response after async operation completes
  }).catch(error => {
    console.error(error); // Log the error, but do not send a response to the client 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));