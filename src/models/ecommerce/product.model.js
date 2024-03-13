import mongoose from "mongoose";
i

const ProductSchema = mongoose.Schema(
  {
    discription: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    productImage: {
        type:String,
    },
    stock:{
        type:Number,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
