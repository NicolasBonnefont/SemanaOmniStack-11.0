const express  = require('express')

const app = express()

app.get('/', (request, response) => {

  return response.json({
    Mensage: 'Hello World'
  })
})

app.listen(3333)