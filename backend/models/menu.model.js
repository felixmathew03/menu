import mongoose from "mongoose";

const menuSchema=new mongoose.Schema({
    mname:{type:String},
    mdescription:{type:String}
});
export default mongoose.model.Menus||mongoose.model("Menu",menuSchema);