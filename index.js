const express = require('express');
const User = require('./models/User');

const app = express();

app.get('/api/v1/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(3002, () => {
  console.log('Listening on port 3000');
});
