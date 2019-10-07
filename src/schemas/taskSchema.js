'use strict'

const taskTypeDefs = `
  type Task {
    id: ID!
    description: String!
    status: String!
  }

  input CreateTaskInput {
    description: String!
    status: String!
  }

  input UpdateTaskInput {
    description: String
    status: String
  }
`

const taskQueries = `
  allTasks: [Task]!
`

const taskMutations = `
  addTask(input: CreateTaskInput): Task!
  updateTask(id: ID, input: UpdateTaskInput): Task!
`

module.exports = { taskTypeDefs, taskQueries, taskMutations }