// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose;

// Schema:
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  baker: {
    type: String,
    enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
  },
});

// helper methods

// Static
// breadSchema.methods.allBaked = function () {
//   return this.find({ baker: this.baker });
// };

// Instance
breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker}.`;
};

// Model and Export
const Bread = mongoose.model("Bread", breadSchema);
module.exports = Bread;
