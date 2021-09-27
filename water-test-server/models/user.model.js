module.exports = (mongoose) => {
  const User = mongoose.model(
    "user_record",
    mongoose.Schema(
      {
        username: { type: String, unique: true },
        password: String,
        user_type: Number,
        token: String,
        email: { type: String, unique: true },
      },
      { timestamps: true }
    )
  )

  return User
}
