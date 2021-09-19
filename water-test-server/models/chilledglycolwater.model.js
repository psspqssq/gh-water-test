module.exports = (mongoose) => {
  const ChilledGlycolWater = mongoose.model(
    "chilled_glycol_water_record",
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

  return ChilledGlycolWater
}
