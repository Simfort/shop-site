'use server'
import User from '../../../../sql/models/User.js'
import Product from '../../../../sql/models/Product.js'
import { NextApiRequest,NextApiResponse } from "next"


export async function POST(req:Request) {
    try{
        const data=await req.json()
        const user=await User.findOne({
        where:{
          name:data.user
        }
        }) as any
        await Product.create({
            title:data.title,
            description:data.description,
            category:data.category,
            price:data.price,
            UserId:user.id
      })
      return Response.json(JSON.stringify('ok'))
    }catch(e){
        return Response.json(JSON.stringify('bad'))
    }
  
}