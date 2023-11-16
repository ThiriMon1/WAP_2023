const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req,res) => {
    console.log("hi");
    fs.createReadStream(path.join(__dirname,'picture.jpg')).pipe(res);
}).listen(3000);