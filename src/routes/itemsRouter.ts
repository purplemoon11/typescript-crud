import { Request, Response, Router } from "express";
import { mockItems } from "../mockItems/mockItems";
import { findById, findAll, updateItem, deleteItem } from "../services/itemsServices";

export const router: Router = Router()


//Get all items

router.get('/get', async (req: Request, res: Response)=>{
    try {
        const result = await findAll()
        res.send(result)
    } catch (error) {
        res.status(404).send("Not Found!!!")
    }
})

//Get by id

router.get('/get/:id', async (req: Request, res: Response)=>{
    try {
        const result = await findById(Number(req.params.id));
        res.json(result);
      } catch (error) {
        // logger
        res.status(404).json('Error');
      }
    });  

//Post/Create data

router.post('/create', (req: Request, res: Response)=>{
    const postData ={
        id: Number(req.body.id),
        title: req.body.title,
        body: req.body.body
    }
    mockItems.push(postData)
    res.status(400).send({message: "Data added successfully!!!"})
})

//Update data

router.put('/:id', async (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    let updatedData = req.body
    console.log(req.body)
    try{
        const result = await  updateItem(id, updatedData)
        res.status(200).json(result)
    }catch(err){
        res.json(err)
    }
})

//delete

router.delete('/update/:id', (req:Request, res:Response)=>{
    let id:number = Number(req.params.id)
    const result = deleteItem(id)
    res.status(200).json({message: "Item Deleted Successfully", data: result})
})