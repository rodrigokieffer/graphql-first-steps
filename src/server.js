'use strict'

const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./types/typeDefs')
const resolvers = require('./resolvers/resolvers')

const server = new GraphQLServer({ typeDefs, resolvers })

module.exports = { server }