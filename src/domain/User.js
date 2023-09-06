const Reducer = require('../lib/Reducer')
const UserWasCreated = require('../events/UserWasCreated')
const UserWasDeleted = require("../events/UserWasDeleted")
const UserWasUpdated = require("../events/UserWasUpdated")

module.exports = class User {
  id = null
  name = null
  email = null
  password = null
  createdAt = null
  updatedAt = null
  deletedAt = null

  static collection = 'users'

  #reducer = null
  #pendingEvents = []
  #persistedEvents = []

  constructor (persistedEvents = []) {
    this.#reducer = new Reducer({
      [UserWasCreated.eventName]: UserWasCreated.commit,
      [UserWasDeleted.eventName]: UserWasCreated.commit,
      [UserWasCreated.eventName]: UserWasCreated.commit,
    })
  }
}