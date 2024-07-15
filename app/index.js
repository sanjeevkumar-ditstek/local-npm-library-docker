const express = require('express')
const lib1 = require('lib1');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!' + lib1() + " "+ lib2())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})