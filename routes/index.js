const express = require('express');

const router = express.Router();
const userRouter = require('../controllers/users');


router.get('/', (request, response) => {
    response.json({ message: "Eureka it worked!" });
});

router.use('/users', userRouter);

module.exports = router;