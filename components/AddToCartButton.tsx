'use client'
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { setTimeout } from "timers"
import { useCart } from "@/hooks/use-cart"
import { Product } from "@/payload-types"

const AddToCartButton = ({product}: {product: Product}) => {
    const {addItem} = useCart()
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false)
        },4000)

        return () => clearTimeout(timeout)
    },[isSuccess])
    return (
        <Button
        onClick={() => {
            addItem(product)
            setIsSuccess(true)
        }}
        size="lg"
        className="w-full">
            {isSuccess ? "Added!" : "Add To Cart"}
        </Button>
    )
}

export default AddToCartButton