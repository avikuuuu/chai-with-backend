import mongoose from "mongoose";


const oderItemschema=mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity:{
          type:Number,
          required:true,
      },
})

const orderSchema = mongoose.Schema(
  {
    orderPrice:{
        type:Number,
        required: true,
    },
    customer :{
         type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:{type:[oderItemschema]},

    address:{
        type:String,
        required:true
    },
    status:{
        type: String ,
        enum: ['Pending', 'Delivered','cancelled'],
        default: 'Pending'
      

    }
    

  },
  { timestamps: true }
);

export const order = mongoose.model("order", orderSchema);
