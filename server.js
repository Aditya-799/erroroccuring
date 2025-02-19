const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).json({info: 'preset text'})
})
app.post('/', (req, res) => {
  const {data} = req.body
  console.log(data)
})
app.listen(3000, () => {
  console.log('server started running')
})
