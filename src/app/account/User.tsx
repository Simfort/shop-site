import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";

export default function User({user}:{user:string}){
     const [storage,setStorage]=useState('')
    useEffect(  ()=>{
        setStorage(localStorage.getItem('user')!)
    },[])
    return <section className="flex w-[100%]  items-center justify-center flex-col mt-8" >
        
        <section className=" mt-40 w-[100%] flex flex-col  mt-6">
            <h1 className="bg-violet-400 text-white w-[100%] rounded-2xl mb-10 text-center p-3 text-5xl">{user}</h1>
            <Link className="bg-gradient-to-r from-violet-300 to-purple-500 text-white p-5 text-center font-bold  hover:opacity-70 active:opacity-40 w-[100%]" href={`/account/bucket?user=${storage}`}>Your bucket</Link>
            <Link className=" bg-gradient-to-r from-violet-300 to-purple-500 text-white p-5 text-center font-bold  hover:opacity-70 active:opacity-40 w-[100%]" href={`/account/create-bucket?user=${storage}`}>Create product</Link>
        </section>
        <section className="mt-20">
            <h1 className="text-3xl">Your top seils</h1>
        </section>
    </section>
}