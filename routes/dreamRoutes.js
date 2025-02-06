const express = require('express');
const { validateDreamInput } = require('../middleware/inputValidation');
const { interpretDream } = require('../controllers/dreamController');

const router = express.Router();

router.post('/interpret', validateDreamInput, interpretDream);

module.exports = router;