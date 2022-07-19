const express = require('express');

const { 
    homeRender,
    colorPickerRender

} = require('../controllers/homeControllers');

const { 
    signinRender,
    signupRender

} = require('../controllers/authControllers');

const router = express.Router()


router.get('/', homeRender);
router.get('/signin', signinRender);
router.get('/signup', signupRender);
router.get('/home', colorPickerRender);

module.exports = router;