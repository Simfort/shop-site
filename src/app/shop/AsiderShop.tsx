import Link from "next/link";
import { useEffect, useState } from "react";


export default function AsideShop({open}:{open:boolean}){
    const [timeHide,setTimeHide]=useState('flex')
    useEffect(()=>{
        if(!open){
            setTimeout(()=>{
                setTimeHide('hidden')
            },200)
        }
    },[])
    return <section className={` ${open?'animate-[opening_0.2s_linear] opacity-1 ':`animate-[closing_0.2s_linear] opacity-0 ${timeHide}`} flex text-2xl flex-col min-h-[100vh] fixed w-[20%] border-t-4  p-20 gap-20  text-white bg-violet-500`}>
        <Link className="p-5 rounded-xl bg-violet-600 transition delay-75 ease-linear hover:bg-violet-400 active:bg-violet-200" href='/shop/techonology'>Techonology</Link>
        <Link className="p-5 rounded-xl bg-violet-600 transition delay-75 ease-linear hover:bg-violet-400 active:bg-violet-200" href='/shop/beauty'>Beauty</Link>
        <Link className="p-5 rounded-xl bg-violet-600 transition delay-75 ease-linear hover:bg-violet-400 active:bg-violet-200" href='/shop/games'>Games</Link>
        <Link className="p-5 rounded-xl bg-violet-600 transition delay-75 ease-linear hover:bg-violet-400 active:bg-violet-200" href='/shop/toys'>Toys</Link>
    </section>
}