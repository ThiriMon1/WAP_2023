const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products-router');
const usersRouter = require('./routes/users-router');

const app = express();

app.use('/public',express.static(path.join(__dirname,'public','resources','css')));

//middleware (work if has get, otherwise skip)
app.use(express.urlencoded());
app.use(productsRouter);
app.use(usersRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.use((err,req,res)=>{
    res.status(500).send('Internal server error');
});

app.listen(3000);
