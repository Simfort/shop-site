'use client'
import { useState } from "react"
import { IUser } from "./userTypes"
import createUser from "./createUser"
import { useRouter } from "next/router"
import Link from "next/link"





export default function FormReg(){
    const [value,setValue]=useState<IUser>({name:'',password:''})
    const [err,setErr]=useState<string|boolean>('')
    const validator=async (data:IUser)=>{
        const err=await createUser(data)
        if(err){
            setErr(true)
        }else{
            setErr(false)
        }
        
    }
    
    return <form  className="flex h-1/2 shadow-md bg-slate-50 w-1/3 flex-col  p-10 gap-10 justify-center" >
        <p>Name</p>
        <input className=" bg-white rounded-sm outline-none p-3 shadow-md " value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} type="text" />
         <p>Password</p>
        <input className=" bg-white rounded-sm outline-none p-3  shadow-md " value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} type="password" />
        <Link className={`bg-gradient-to-r from-violet-500 to-purple-500 rounded  font-bold   text-white text-center p-3 hover:opacity-50 active:opacity-15`} href='/' onClick={(e)=>{validator(value)}} >Log</Link>
    </form>
}