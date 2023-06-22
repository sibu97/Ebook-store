const express = require('express')
const app = express();
const PORT = 4040;


const path = require('path')
app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,'client','build')))
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.listen(PORT,()=>{
    console.log('server running on ',PORT)
})