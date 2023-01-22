import mongoose from 'mongoose'

// {
//   username: "postman",
//   password: "$2b$10$al13lEHqP8TlSJHtcp0lv.L8nLyvs4Mrbi1jiZT2rOga89qH9/vlK",
//   type: "buyer",
//   id: "ed8a465b-18c7-42f0-99b3-74d07fde48a1",
// },

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minLength: 3 },
  passwordHash: String,
  type: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

export default User
