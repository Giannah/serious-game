const express = require('express')
const port = 4000
const bodyParser = require('body-parser')
const Hero = require('./Hero')

const app = express()

const hero = new Hero()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.post('hero/registration', (req, res) => {
  hero.registerHero(req.body)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Server is up & running at: http://localhost:${port}`)
})
