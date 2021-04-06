const express = require('express')
const app = express()
const port = 3355

app.use(express.static(`${__dirname}/build`))

app.get('/', async (req,res)=>{
	res.sendFile('index.html')
})

app.listen(port,()=>{
	console.log('server started')
})