import { IUser } from "./userTypes";

export default async function createUser(value:IUser){
    if(value.name&&value.password){
            const res=await fetch('/api/create-user',{
                method:'POST',
                body:JSON.stringify(value)
            })
            const data=await res.json()
             if(data=='yes'){
                    console.log('yes')
                    localStorage.setItem('user',value.name)
                    return true
                }else{
                     console.log('false')
                    return false
            }
        }
        return false
}