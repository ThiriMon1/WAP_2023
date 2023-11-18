const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-products.html'));
});

router.post('/product',(req,res)=>{
    res.send(`${req.body.title}, ${req.body.price}`);
});


module.exports = router;