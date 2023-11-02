# Event Sourcing in JavaScript

## Overview

This repository demonstrates the concept of Event Sourcing (or "Event Registration") in JavaScript. Event Sourcing is an architectural approach that focuses on recording all events that occur in a system, rather than just maintaining the current state. This allows you to reconstruct the system state at any time, audit past actions, and maintain a single source of truth.

## How it works

- **Events:** Instead of updating the state directly, each action in the system is recorded as an event. An event is an object that describes what happened. Example: "Order Created", "Product Added to Cart", etc.

- **Event Log:** All events are stored in an event log, which is an immutable sequence of events in the order they occurred.

- **Projections:** To obtain the current state, events are applied in order to a projection. Each projection can represent a specific view of the system state.

- **Event Replay:** As events are stored in chronological order, it is possible to replay them to reconstruct the current state of the system at any time.

## Why Event Sourcing?

- **Audit:** All events are recorded, which facilitates auditing and tracking of all actions carried out in the system.

- **Failure Recovery:** In case of failures, it is possible to reconstruct the system state from the recorded events.

- **Complex Domain Model:** Useful when the system's domain model is complex and the evolution of this model is important.

- **Multiple Views:** Allows you to create multiple views of the system state without affecting the event log.

## Usage Examples

This repository includes examples of simple Event Sourcing implementations in JavaScript. You will find:

- A simulated event log.
- Projections to build states from events.
- Examples of events and how to apply them.


## Contribution

Feel free to contribute additional examples, enhancements, or bug fixes. Just open an [issue](https://github.com/felpsalvs/event-sourcing-js/issues) or send a [pull request](https://github.com/felpsalvs/event-sourcing-js/pulls ).
