import React, {useState} from "react";

export interface AddNewProductProps {
    addNewProduct: (value: string) => void;
}

export default function AddNewProduct({addNewProduct}: AddNewProductProps) {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={() => {
                addNewProduct(inputValue);
                setInputValue("");
            }}>
                Add item
            </button>
        </>
    )


}