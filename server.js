const express = require('express')
const app = express()


app.get('/', (req, res, next)=>{
    res.status(200).send("Hello World!");
});




const port = 80
app.listen(port, () => console.log(`http://localhost:${port}`))
