// console.log("Hello")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Login to twitter account')
  })
  app.get('/instagram', (req, res) => {
    res.send('Instagram post and reels')
  })
    
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})