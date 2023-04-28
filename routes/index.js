// controler for the mvc
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index')
})

// to export the router so that it can be used in server.js
module.exports = router