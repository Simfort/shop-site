export default async function getProducts(user:string){
    const res=await fetch('/api/get-products',{method:'POST',body:JSON.stringify({user:user})})
    const data=await res.json()
    return data
}