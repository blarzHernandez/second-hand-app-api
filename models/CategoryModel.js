import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    _id:{
        type: String,
        unique: true,
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
      },
      updatedAt: {
        type: Date,
      },
      name:{
          type:String,
      },
      description:{
          type:String,
      },
      icon:{
          type:String
      }
    
});


const Category = mongoose.model("Category",categorySchema);

export default Category;