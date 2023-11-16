const dns = require('dns');
const domain = 'www.miu.edu';
dns.resolve4(domain, (err, address) => {
    if(err){
        console.log(err);
    }else{
        console.log(`IP address for ${domain} : ${address.join(', ')}`);
    }
});
