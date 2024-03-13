import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var todoSchema = new mongoose.Schema(
  {
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false,
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    subTodos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
    }] 
  },
  { timestamps: true }
); // Sets

//Export the model
export const Todo = mongoose.model("Todo", todoSchema);
