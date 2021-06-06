const express = require('express');

const router = express.Router();

app.post('/users', db.createUser);
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUsersById);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

module.exports = router;