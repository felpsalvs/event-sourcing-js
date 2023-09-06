const UserRepository = require("./data/UserRepository")
const User = require("./domain/User")
const hash = require("./lib/hasher")

const db = new UserRepository()

function findById(id) {
  const user = db.findById(id)
  if (!user) return null
  return user
}

function create(name, email, password) {
  if (findById(hash(email)))
    throw new Error(`User with email ${email} already exists`)
  const user = User.create({ name, email, password })
  db.save(user)
  return user
}

let Felipe = findById(hash("felipe.dev"))
if (!Felipe) Felipe = create("Felipe Alves", "felipe@felipe.dev", "123mudar")

console.log(Felipe.events)

const Alves = Felipe.update({ name: "Alves" })
console.log(Alves.events)
