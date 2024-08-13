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
            <button disabled={inputValue.length < 6} onClick={() => {
                addNewProduct(inputValue);
                setInputValue("");
            }}>
                Add item
            </button>
        </>
    )


}