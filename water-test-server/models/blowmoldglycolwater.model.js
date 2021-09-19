module.exports = (mongoose) => {
  const BlowmoldGlycolWater = mongoose.model(
    "blowmold_glycol_water_record",
    mongoose.Schema(
      {
        date: String,
        glycol: Number,
        conductivity: Number,
        ph: Number,
      },
      { timestamps: true }
    )
  )

  return BlowmoldGlycolWater
}
