module.exports = (mongoose) => {
  const FeedWater = mongoose.model(
    "feed_water_record",
    mongoose.Schema(
      {
        date: String,
        hardness: Number,
        conductivity: Number,
        ph: Number,
        temperature: Number,
      },
      { timestamps: true }
    )
  )

  return FeedWater
}
