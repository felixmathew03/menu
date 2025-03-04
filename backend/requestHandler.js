import menuSchema from './models/menu.model.js';
import itemSchema from './models/item.model.js';

export async function addMenu(req,res){
    try{
        const{...menu}=req.body;
        const data=await menuSchema.create({...menu});
        return res.status(201).send({msg:"successfuly added"})
    }catch(error){
        res.status(404).send({msg:"error"})
    }
}

export async function addItem(req,res){
    try{
        const{...item}=req.body;
        const data=await itemSchema.create({...item});
        return res.status(201).send({msg:"successfuly added"})
    }catch(error){
        res.status(404).send({msg:"error"})
    }
}

export async function getMenu(req,res) {
    try {
        const menus=await menuSchema.find();
        return res.status(200).send(menus)
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

export async function getItem(req,res) {
    try {
        const {menu}=req.params;
        const items=await itemSchema.find({menu});
        const mend=await menuSchema.findOne({mname:menu});
        return res.status(200).send({items,mend})
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}