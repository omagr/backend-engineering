const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//@ req => middleware => res

//# it will invoke for evevr single req whichi is down there 
app.use([logger, authorize])
// also 
app.use('/api', [logger, authorize]) // -> api, api/products, api/__

// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About') 
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})