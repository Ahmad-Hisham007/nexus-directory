import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: { type: String },
  phoneNumber: { type: Number },
  email: { type: String, unique: true, required: true },
  emailVerified: { type: Date, default: null },
  image: { type: String },
  // Extra fields
  password: { type: String, select: false },
  role: { type: String, default: "user" },
});
const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;
