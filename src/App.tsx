import '../src/App.css'
import React, {useState} from "react";
import {Product} from "./Product.ts";
import ProductItem from "./ProductItem.tsx";
import AddNewProduct from "./AddNewProduct.tsx";

function App() {

    const [products, setProducts] = useState<Product[]>([]);

    function deleteProduct(product: Product) {
        let duplicate = [...products];
        duplicate = duplicate.filter(item => item.name != product.name);
        setProducts(duplicate);
    }

    function updateProduct(product: Product, newName: string) {
        let duplicate = [...products];
        duplicate = duplicate.map(item => {
            if (item.name === product.name) {
                return {
                    name: newName
                }
            } else {
                return item;
            }
        });
        setProducts(duplicate);
    }

    function addNewProduct(value: string) {
        const newProduct: Product = {
            name: value
        }
        setProducts([...products, newProduct])
    }

    return (
        <>
            {
                products.map(product =>
                    <div key={product.name}>
                        <ProductItem product={product}
                                     deleteProduct={(product) => deleteProduct(product)}
                                     updateProduct={(product, newName) => updateProduct(product, newName)} />
                    </div>
                )
            }
            <br/>
            <AddNewProduct addNewProduct={(value) => addNewProduct(value)} />
        </>
    )
}

export default App

