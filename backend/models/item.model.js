import mongoose from "mongoose";

const itemSchema=new mongoose.Schema({
    iname:{type:String},
    idescription:{type:String},
    menu:{type:String},
    price:{type:String}
});
export default mongoose.model.Items||mongoose.model("Item",itemSchema);