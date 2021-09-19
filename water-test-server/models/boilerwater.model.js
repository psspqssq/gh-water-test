module.exports = (mongoose) => {
  const BoilerWater = mongoose.model(
    "boiler_water_record",
    mongoose.Schema(
      {
        date: String,
        alkalinity: Number,
        sulfites: Number,
        conductivity: Number,
        ph: Number,
        blowdown: Boolean,
        boilernumber: Number,
      },
      { timestamps: true }
    )
  )

  return BoilerWater
}
