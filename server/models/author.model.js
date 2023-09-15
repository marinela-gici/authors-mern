const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Author must have at least 3 characters"],
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
