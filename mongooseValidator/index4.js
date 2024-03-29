const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-games", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 200,
  },
  publisher: String,
  tags: {
    type: [String],
    required: true,
    enum: ["sports", "racing", "action", "rpg"],
    validate: {
      validator: function (v) {
        return v.length > 1;
      },
      message: "You must provide more than 1 tag.",
    },
  },
  date: { type: Date, default: Date.now },
  onSale: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.onSale;
    },
  },
});

const Game = mongoose.model("Game", gameSchema);

async function saveGame() {
  const game = new Game({
    title: "Pacman",
    publisher: "Nintendo",
    tags: ["action"],
    onSale: true,
    price: 29.99,
  });

  try {
    const result = await game.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

saveGame();
