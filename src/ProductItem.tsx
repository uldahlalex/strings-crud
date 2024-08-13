import {Product} from "./Product.ts";
import React, {useState} from "react";

export interface ProductItemProps {
    product: Product;
    deleteProduct: (product: Product) => void;
    updateProduct: (oldProduct: Product, newName: string) => void;
}

export default function ProductItem({ product, deleteProduct, updateProduct }: ProductItemProps) {

    const [editName, setEditName] = useState(product.name);


    return(<>
        {
            product.name
        }
        <input onChange={e => setEditName(e.target.value)} />
        <button disabled={editName.length < 6} onClick={() => {
            updateProduct(product, editName);
        }}>Update product
        </button>
        <button onClick={() => {
            deleteProduct(product);
        }}>Delete product</button>
    </>)
}