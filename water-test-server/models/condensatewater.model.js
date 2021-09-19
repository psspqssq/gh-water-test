module.exports = mongoose => {
  const CondensateWater = mongoose.model(
    "condensate_water_record",
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

  return CondensateWater;
};