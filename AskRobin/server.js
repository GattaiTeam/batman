require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const path = require('path')
app.use(express.json())

const posts = [
  {
    username: "Rodo",
    Monto: '6000',
    Telefono: '55555555555',
    Email: 'a@a.com',
    Nombre: 'Rodolfo',
    ApellidoPaterno: 'Ram',
    ApellidoMaterno: 'Val'
  }
]

app.post('/sendToken', (req, res) => {
  // Authenticate User
  const username = req.body.username


  const user = { name: username }
  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  res.json({ accessToken: accessToken, refreshToken: refreshToken })


})

app.post('/createToken', (req, res) => {
  // Parsing of the information
  const user = req.body
  const accessToken = generateAccessToken(user)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  posts.push(user)
  console.log(posts)
  //res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
  // Returns the token and gives it back to local storage

})


app.get('/info', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function generateAccessToken(user){
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'})
}


app.get('/superman', (req,res) => {
    res.json('Superman');
    console.log('Sent a Superman');
});

app.get('/creditea', function (req, res) {
    res.redirect(301, 'http://localhost:5000');
});

app.listen(4001)
