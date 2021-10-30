const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('this is an about page!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})