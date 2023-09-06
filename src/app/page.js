import methods from "@/methods.json"
import products from "@/products.json"
import credentials from "@/credentials.json"
import currencies from "@/currencies.json"
import sales from "@/sales.json"

import { ethers } from "ethers"

export function sold(sales){
  return sales.map(s=>s.quantity ?? 1).reduce((prev, curr)=>prev+Number(curr), 0)
}

export function left(product){
  return BigInt(product.available) - sold(product.sales)
}

export function b(ns){return BigInt(ns??0)}
export function s(b) {return b.toString()}
export default async function HomePage() {

    // list items plus sales list methods show currencies
  return <div className="flex flex-col items-center min-h-screen justify-start gap-5 p-2">
    {products.map(p => <div className="flex flex-col item-stretch justify-start gap-2">
      <p>{p.text}</p>

      <Image src={"/"+ p.image} width={500} height={500} alt="Product image" />

      <p>Sold {sold(p.sales)} of {p.available}</p>
    </div>)}
  </div>
}