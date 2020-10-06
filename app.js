const express = require('express');
const app = express();

app.get('/header', (req, res) => {
    let ipAdd = req.ip;
    let lan = req.headers['accept-language'];
    let sof =  req.headers['user-agent'];

    res.json({'ipaddress': ipAdd,
            'language': lan,
            'software': sof});
})


app.listen(3000, () => {
    console.log('Server started hehe')
})