const Reducer = require("../lib/Reducer")
const UserWasCreated = require("../events/UserWasCreated")
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

  static collection = "users"

  #reducer = null
  #pendingEvents = []
  #persistedEvents = []

  constructor(persistedEvents = []) {
    this.#reducer = new Reducer({
      [UserWasCreated.eventName]: UserWasCreated.commit,
      [UserWasDeleted.eventName]: UserWasCreated.commit,
      [UserWasUpdated.eventName]: UserWasUpdated.commit,
    })

    if (persistedEvents > 0) {
      this.#persistedEvents = persistedEvents
      this.#updateInternalState()
    }
  }

  #updateInternalState() {
    const state = this.state
    for (const propertyName of Object.keys(state)) {
      this[propertyName] = state[propertyName]
    }
  }

  get events() {
    return [...this.#persistedEvents, ...this.#pendingEvents]
  }

  set events(value) {
    this.#persistedEvents = value
    this.#updateInternalState()
  }

  get state() {
    const currentState = this.#reducer.reduce(new User(), this.events)
    return { ...currentState }
  }
}
