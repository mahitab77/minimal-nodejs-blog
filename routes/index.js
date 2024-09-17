const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/contact', pageController.getContactPage);
router.get('/post', pageController.getPostPage);

module.exports = router;
