const cloneDeep = require('lodash.clonedeep')

class Reducer {
  #knowEvents = []

  constructor (knowEvents) {
    this.#knowEvents = knowEvents
  }

  reduce (state, events) {
    return events.reduce((state, event) => {
      const clonedState = cloneDeep(state)
      return this.#knowEvents[event.name](clonedState, event)
    }, state)
  }
}

module.exports = Reducer