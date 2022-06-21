import { mockItems } from "../mockItems/mockItems";
import { Items } from "../contracts/items";

export const findAll = () => {
    return Promise.resolve(mockItems);
}

export const findById = (id: Number)=>{
    const item = mockItems.find((item) => item.id === id);
    if(item){
        return Promise.resolve(item);
    }
    return Promise.reject()
}

export const updateItem = (id: number, item:Items)=>{
    const itemById = mockItems.find((arkoItem)=>arkoItem.id ===id) 
    if(itemById){
        itemById.id = item.id ;
        itemById.title = item.title;
        itemById.body = item.body;
        return Promise.resolve(itemById)
    }else{
        return Promise.reject()
    }
}

export const deleteItem = (id:number)=>{
    const itemToDelete = mockItems.filter(item=>item.id!=id)
    return Promise.resolve(mockItems)
}