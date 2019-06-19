const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const rahuiRoutes = require('./routes/rahui')
const iwiRoutes = require('./routes/iwi')

const server = express()

server.use(cors('*'))
server.use(passport.initialize())

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', authRoutes)
server.use('/api/users', usersRoutes)
server.use('/api/iwi', iwiRoutes)
server.use('/api/rahui', rahuiRoutes)

module.exports = server
