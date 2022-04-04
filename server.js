const express = require('express')
const cors = require('cors')
const path = require('path')
const { renderToString } = require('react-dom/server')
const fs = require('fs')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

app.use('/', (req, res) => {})

app.listen(5004, () => console.log('Listening in on port 5001'))
