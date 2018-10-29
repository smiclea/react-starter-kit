import express from 'express'
import path from 'path'

// Create our app
const app = express()
const PORT = process.env.PORT || 3000

const isDev = process.argv.find(a => a === '--dev')
if (isDev) {
  require('./dev')(app)
}

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`\x1b[36mServer is available at http://localhost:${PORT}\x1b[0m`)
})
