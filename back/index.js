const express = require('express');

const app = express();

app.get('/api/user', (req, res) => {});
app.post('/api/user', (req, res) => {});

app.get('/api/user/:id', (req, res) => {});

app.post('/api/user/logout', (req, res) => {});

app.post('/api/user/login', (req, res) => {});

app.get('/', (res, req, next) => {});

app.listen(3065, () => {
  console.log('server is running on localhost:3065');
});
