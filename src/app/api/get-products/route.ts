import Product from "../../../../sql/models/Product.js";
import User from "../../../../sql/models/User.js";

export async function POST(req:Request){
    try{
        const data=await req.json()
        const user=await User.findOne({
            where:{
                name:data.user
            }
        }) as any
        const products=await Product.findAll({
            where:{
                userId:user.id
            }
        })
        return Response.json(products)
    }catch(e){
        console.log(e)
        return Response.json('bad')
    }
   
}