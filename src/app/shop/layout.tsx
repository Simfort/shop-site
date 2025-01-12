'use client'
import { useState } from "react";
import AsideShop from "./AsiderShop";

export default function Layout(){
    const [open,setOpen]=useState(false)
    return <aside >
        <button onClick={()=>setOpen(!open)} className={`text-xl w-[20%] bg-purple-900 text-violet-300 ${!open?`rounded-r-full`:`rounded-tr-full`} flex flex-col gap-1 p-4 transition-all delay-150 ease-linear  hover:bg-violet-400 `}>
           Category
        </button>
        {open&&<AsideShop open={open}/>}
        {!open&&<AsideShop open={open}/>}
    </aside>
}