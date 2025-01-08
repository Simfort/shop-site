import { IProduct } from "./Types"

const createProduct=async (value:IProduct)=>{
    try{
        const res=await fetch('/api/create-bucket',{
            method:'POST',
            body:JSON.stringify(value)
        })
        const data=await res.json()
        console.log(data)
        return data
    }catch(e){
        console.log(e)
    }
}

export default createProduct