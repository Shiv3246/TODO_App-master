const express = require('express');
const router = express.Router();

router.post('/', require('../controllers/submit_controller'));

module.exports = router;