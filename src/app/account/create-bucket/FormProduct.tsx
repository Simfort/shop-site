'use client'

import { useSearchParams } from "next/navigation"
import createProduct from "./createProduct"
import { useEffect, useState } from "react"
import { IProduct } from "./Types"

export default function FormProduct(){
    const param=useSearchParams()
    const [value,setValue]=useState<IProduct>({user:param.get('user')!,title:'',description:'',category:'Techonology',price:0})
    const validator=(data:IProduct)=>{   
        return createProduct(data)
    }
    return <form  className="flex flex-col gap-10 bg-violet-200 p-20">
        <p className="text-4xl">Title</p>
        <input className="bg-purple-100 p-2 rounded-lg shadow-md text-2xl outline-none" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})} type="text" />
        <p className="text-2xl">Description</p>
        <textarea className=" resize-none bg-purple-100 p-2 h-48 rounded-lg shadow-md text-xl outline-none" value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}  />
        <p className="text-2xl">Category</p>
        <select className="text-xl p-3 bg-purple-100 outline-none shadow-md"  value={value.category} onChange={(e)=>setValue({...value,category:e.target.value})} >
            <option className="bg-purple-100 outline-none" value="Techonology">Techonology</option>
            <option  className="bg-purple-100 outline-none"  value="Beauty">Beauty</option>
            <option className="bg-purple-100 outline-none"  value="Games">Games</option>
            <option className="bg-purple-100 outline-none"  value="Toys">Toys</option>
        </select>
        <p className="text-2xl">Price in $</p>
        <input className="bg-purple-100 p-2 rounded-lg shadow-md text-2xl outline-none"  value={value.price} onChange={(e)=>setValue({...value,price:Number(e.target.value)})} type="number" />
        <button className="text-2xl  bg-purple-800 text-white p-2 rounded-lg" onClick={(e)=>{validator(value)}}>Create</button>
    </form>
}