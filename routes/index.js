const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.json({ message: "Eureka it worked!" });
});

module.exports = router;