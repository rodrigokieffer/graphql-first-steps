'use strict'

const { taskQueries, taskMutations } = require('./../tasks/resolvers')

const resolvers = {
  Query: {
    ...taskQueries
  },
  Mutation: {
    ...taskMutations
  }
}

module.exports = resolvers