'use client'
import FormReg from "./FormReg";
import { useState } from "react";
import { useEffect } from "react";

export default  function Page(){
    const [storedValue, setStoredValue] = useState('');

  useEffect(() => {
    setStoredValue(localStorage.getItem('user')||'');
  }, []);
    return <>
        {!storedValue&&<main className="flex justify-center items-center w-1/1 h-screen">
        <FormReg/>
    </main>}
    </>
}