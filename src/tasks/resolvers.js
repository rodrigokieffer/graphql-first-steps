'use strict'
const uuidv4 = require('uuid/v4')
const tasks = require('./../models/task')

const taskQueries = {
  allTasks: (root, args, context, info) => {
    return tasks
  }
}

const taskMutations = {
  addTask: (root, args, context, info) => {
    const payload = {
      id: uuidv4(),
      ...args.input
    }
    tasks.push(payload)

    return payload
  },
  updateTask: (root, { id, input }, context, info) => {
    const task = tasks.find((item) => item.id === id)

    input.description && (task.description = input.description)
    input.status && (task.status = input.status)

    return task
  }
}

module.exports = { taskQueries, taskMutations }