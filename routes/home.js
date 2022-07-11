const express = require('express');
const { 
    homeRender 
} = require('../controllers/homeControllers');
const router = express.Router()


router.get('/', homeRender);

module.exports = router;