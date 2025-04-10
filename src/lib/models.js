import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["pants", "coat", "shoes", "jacket"],
      required: true,
    },
    price: { type: Number, required: true },
    sizes: [{ type: String }],
    colors: [{ type: Object }],
    description: { type: String },
    image: { type: String, required: true },
    otherImages: [{ type: String, }],
    stock: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    comments: [commentSchema]
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  avatar: { type: String }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const ProdSchema = mongoose.models.Product || mongoose.model("Product", productSchema);


