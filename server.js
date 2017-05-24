const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/public/index.html'))
})

// Handle 404 - Keep this as a last route
app.use((req, res, next) => {
  // res.status(400)
  // res.send('404: File Not Found')
  res.redirect('/')
})

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
})
