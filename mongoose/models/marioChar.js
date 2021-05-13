const mongoose = require("mongoose");
const schema = mongoose.Schema;

// create the schema
const MarioCharSchema = new schema({
  name: String,
  weight: Number,
});

// mariochar as the collection name
const MarioChar = mongoose.model("mariochar", MarioCharSchema);
module.exports = MarioChar;
