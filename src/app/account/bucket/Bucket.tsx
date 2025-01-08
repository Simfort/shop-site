'use client'
import { useSearchParams } from "next/navigation"
import getProducts from "./getProducts"
import { useEffect, useState } from "react"
import Product, { IProduct } from "./Product"
export default function Bucket(){
    const param=useSearchParams()
    const [bucket,setBucket]=useState<IProduct[]>([])
    useEffect(()=>{
        getProducts(param.get('user')!).then(res=>setBucket(res))
        return ()=>{}
    },[])
    return <section className="bg-violet-200 h-screen p-20 overflow-scroll">
        {bucket.map((val,i)=><Product key={i} obj={{title:val.title,description:val.description,category:val.category,price:val.price}}/>)}
    </section>
}