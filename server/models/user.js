import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },
    //Our password is hashed with bcrypt
    password: { type: String, required: true },
    email: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);



UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model("User", UserSchema);
