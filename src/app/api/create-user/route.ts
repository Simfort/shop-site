'use server'
import User from '../../../../sql/models/User.js'
import { NextApiRequest,NextApiResponse } from "next"

export async function POST(req:Request) {
  const data=await req.json()
  const hasUser=await User.findOne({
    where:{
      name:data.name,
      password:data.password
    }
  })
  if(hasUser){
    return Response.json('no')
  }else{
    await User.create({
      name:data.name,
      password:data.password
    })
    return Response.json('yes')
  }
  
}