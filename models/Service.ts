import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // Dynamic reference to Category
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // Dynamic reference to User
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: { type: String, default: "/Hero-image.webp" },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    price: { type: Number, required: true },
    delivery: { type: String, required: true },
  },
  { timestamps: true },
);

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;
