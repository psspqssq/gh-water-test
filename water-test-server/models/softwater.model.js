module.exports = (mongoose) => {
  const SoftWater = mongoose.model(
    "soft_water_record",
    mongoose.Schema(
      {
        date: String,
        hardness: Number,
        conductivity: Number,
        ph: Number,
      },
      { timestamps: true }
    )
  )

  return SoftWater
}
