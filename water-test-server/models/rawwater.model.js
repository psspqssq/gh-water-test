module.exports = mongoose => {
  const RawWater = mongoose.model(
    "raw_water_record",
    mongoose.Schema(
      {
        date: String,
        hardness: Number,
        conductivity: Number,
        ph: Number
      },
      { timestamps: true }
    )
  );

  return RawWater;
};