module.exports = mongoose => {
  const CoolingTowerWater = mongoose.model(
    "cooling_tower_water_record",
    mongoose.Schema(
      {
        date: String,
        hardness: Number,
        conductivity: Number,
        ph: Number,
        ptsa: Number,
        freechlorine: Number,
        location: Number, // Location 0: North, 1: South
      },
      { timestamps: true }
    )
  );
  
  return CoolingTowerWater;
};