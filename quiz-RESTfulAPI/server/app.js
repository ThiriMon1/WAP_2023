const express = require('express');
const bookRouter = require('./routes/book-router');

const app = express();


app.use(express.json());

app.use('/book',bookRouter);

app.use((err,req,res,next)=>{
    res.status(404).send(`error ${err.message}`);
})




app.listen(3000, ()=>console.log('server is listening 3000'));