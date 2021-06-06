const express = require('express');
const app = express();
const router = require('./routes');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

/*
app.post('/users', db.createUser);
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUsersById);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
*/


app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
})