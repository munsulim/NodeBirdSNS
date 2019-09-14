const express = require('express');

const app = express();

app.get('/', (res, req, next) => {});

app.listen(3065, () => {
  console.log('server is running on localhost:3065');
});
