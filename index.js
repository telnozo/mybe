const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        msg: "Successful deployment"
    })
})

app.listen(5050, ()=>{
    console.log('server running on localhost:5050');
})