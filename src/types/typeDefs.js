'use strict'

const { taskTypeDefs, taskQueries, taskMutations } = require('./../schemas/taskSchema')

const Query = `
  type Query {
    ${taskQueries}
  }
`

const Mutation = `
  type Mutation {
    ${taskMutations}
  }
`

const typeDefs = [`
  schema {
    query: Query
    mutation: Mutation
  }
`,
  Query,
  Mutation,
  taskTypeDefs
]

module.exports = typeDefs