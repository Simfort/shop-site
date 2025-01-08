import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";

export default function User({user}:{user:string}){
     const [storage,setStorage]=useState('')
    useEffect(  ()=>{
        setStorage(localStorage.getItem('user')!)
    },[])
    return <section className="flex w-[100%]  items-center justify-center flex-col mt-8" >
        <h1 className="bg-purple-900 text-white w-[100%] text-center p-3 text-5xl">{user}</h1>
        <section className="mt-40 w-[100%] flex flex-col  mt-6">
            <Link className="bg-purple-600 text-white p-5 text-center font-bold  hover:bg-purple-400 active:bg-purple-100 w-[100%]" href={`/account/bucket?user=${storage}`}>Your bucket</Link>
            <Link className="bg-purple-600 text-white p-5 text-center font-bold  hover:bg-purple-400 active:bg-purple-100 w-[100%]" href={`/account/create-bucket?user=${storage}`}>Create product</Link>
        </section>
        <section className="mt-20">
            <h1 className="text-3xl">Your top seils</h1>
        </section>
    </section>
}