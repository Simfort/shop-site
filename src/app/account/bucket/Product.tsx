export interface IProduct{
    title:string,
    description:string,
    category:string,
    price:number
}

export default function Product({obj}:{obj:IProduct}){
    return <div className="bg-violet-300 m-5 p-10 rounded-lg ">
        <h1 className="text-2xl">{obj.title}</h1>
        <p>Description:{obj.description}</p>
        <p className="text-red-400 font-bold text-2xl">{obj.category}</p>
        <p className="text-green-300 font-bold text-2xl">{obj.price} $</p>
    </div>
}