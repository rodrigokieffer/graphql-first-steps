'use strict'

const { server } = require('./server')

server.start({ port: 4000 }, () => console.log('Server is running'))