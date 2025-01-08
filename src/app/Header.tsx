'use client'
import Image from "next/image";
import Link from "next/link";
import lemon from '../../public/lemon.svg'
import { useEffect, useState } from "react";


export default function Header(){
    const [storedValue, setStoredValue] = useState('');

  useEffect(() => {
    setStoredValue(localStorage.getItem('user')||'');
  }, []);
    return <header className="shadow-lg w-[100%] sticky p-4 bg-gradient-to-r from-violet-300 to-purple-500">
        <div className=" flex items-center justify-around">
            <h1 className="text-white font-bold text-3xl ">Shop</h1>
            <nav className="text-white font-bold text-xl flex gap-10">
                <Link className="w-32 text-center hover:bg-purple-500 p-3 rounded-lg" href='/'>Home</Link>
                <Link className="w-32 text-center hover:bg-purple-500 p-3 rounded-lg" href='/shop'>Shop</Link>
                {!storedValue&&<Link className="w-32 text-center hover:bg-purple-500 p-3 rounded-lg" href={'/register'}>Register</Link>}
                {storedValue&&<Link className="w-32 text-center hover:bg-purple-500 p-3 rounded-lg" href={'/account?user='+storedValue}>{storedValue}</Link>}
            </nav>
        </div>
    </header>
}