'use client'
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import User from "./User"

export default function UserRoom(){
    const [storage,setStorage]=useState('s')
    const param=useSearchParams()
    useEffect(  ()=>{
        setStorage(localStorage.getItem('user')!)
    },[])
    return <section className="w-[30%] bg-violet-200 h-screen p-10">
        {storage==param.get('user')&&<User user={param.get('user')!}/>}
    </section>
}